import {useSignInForm} from "../model";
import Input from "@/shared/ui/inputs/base-input";
import { validationRules } from "@/features/auth/validation-auth-form";
import Button, {EButtonVariant} from "@/shared/ui/buttons";
import icon from '@/assets/icon.svg';
import PasswordInput from "@/shared/ui/inputs/password-input";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/ui/inputs/style.ts";
import {
    formContainerStyles, formAuthStyles, errorTextStyles, headerStyles, linkStyles
} from "../../style.ts";

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
    } = useSignInForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className={cn(formAuthStyles(), "pt-[52px] min-h-[697px]")}>
            <div  className={cn(formContainerStyles(), "gap-[30px]")}>
                <div className={headerStyles()}>
                    <h2>Авторизация</h2>
                </div>
                <div  className={cn(formContainerStyles(), "gap-[48px]")}>
                    <img src={icon} width="100" alt="Иконка облачного хранилища"/>
                    <div className={formContainerStyles()}>
                        <div>
                            <Input
                                {...register("email", validationRules.email)}
                                type="email"
                                placeholder="E-mail*"
                                className={cn(inputsStyles({ error: !!errors.email }), "w-[474px]")}/>
                            {errors.email && <p className={errorTextStyles()}>{errors.email.message}</p>}
                        </div>
                        <div>
                            <PasswordInput
                                {...register("password", validationRules.password)}
                                placeholder="Пароль*"
                                className={cn(inputsStyles({error: !!errors.password}), "w-[474px]")}/>
                            {errors.password && <p className={errorTextStyles()}>{errors.password.message}</p>}
                        </div>
                        <div className={linkStyles()}>
                            <p>Забыли пароль?</p>
                            <a href='/'>Восстановить</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className={formContainerStyles()}>
                <Button
                    className="w-[172px]"
                    variant={EButtonVariant.BASE}
                    type="submit"
                    label="Войти"/>
                <div className={linkStyles()}>
                    <p>Нет аккаунта?</p>
                    <a href='/'>Зарегистрироваться</a>
                </div>
            </div>
        </form>
    );
};

export default SignInForm;
