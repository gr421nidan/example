import {useSignUpForm} from "../model";
import Input from "@/shared/ui/inputs/base-input";
import Button, {EButtonVariant} from "@/shared/ui/buttons";
import {ERoleID} from "@/entities/auth/sign-up/type";
import icon from '@/assets/icon.svg';
import PasswordInput from "@/shared/ui/inputs/password-input";
import {inputsStyles} from "@/shared/ui/inputs/style.ts";
import {cn} from "@/shared/utils/cn";
import {Icon} from "@iconify/react";
import {
    formContainerStyles,
    formAuthStyles,
    inputContainerStyles,
    errorTextStyles,
    headerStyles,
    iconStyles, radioContainerStyles, flexCol, linkStyles
} from "../../style.ts";
import { validationRules } from "@/features/auth/validation-auth-form";

const SignUpForm = () => {
    const {register, handleSubmit, onSubmit, errors} = useSignUpForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className={formAuthStyles()}>
            <div className={formContainerStyles()}>
                <div className={headerStyles()}>
                    <h2>Регистрация</h2>
                </div>
                <img src={icon} width="100" alt="Иконка облачного хранилища"/>
                <div className={inputContainerStyles()}>
                    <div>
                        <Input
                            {...register("firstname", validationRules.firstname)}
                            placeholder="Имя*"
                            className={cn(inputsStyles({error: !!errors.firstname}), "w-[474px]")}/>
                        {errors.firstname && <p className={errorTextStyles()}>{errors.firstname.message}</p>}
                    </div>
                    <div>
                        <Input
                            {...register("surname", validationRules.surname)}
                            placeholder="Фамилия*"
                            className={cn(inputsStyles({error: !!errors.surname}), "w-[474px]")}/>
                        {errors.surname && <p className={errorTextStyles()}>{errors.surname.message}</p>}
                    </div>
                    <div>
                        <Input
                            {...register("email", validationRules.email)}
                            type="email"
                            placeholder="E-mail*"
                            className={cn(inputsStyles({error: !!errors.email}), "w-[474px]")}/>
                        {errors.email && <p className={errorTextStyles()}>{errors.email.message}</p>}
                    </div>
                    <div>
                        <PasswordInput
                            {...register("password", validationRules.password)}
                            placeholder="Пароль*"
                            className={cn(inputsStyles({error: !!errors.password}), "w-[474px]")}/>
                        {errors.password && <p className={errorTextStyles()}>{errors.password.message}</p>}
                    </div>

                    <div className={`${flexCol} gap-[23px] justify-start`}>
                        {([ERoleID.USER, ERoleID.ADMIN] as number[]).map((role) => (
                            <label key={role} className={radioContainerStyles()}>
                                <input
                                    {...register("role_id", validationRules.role_id)}
                                    type="radio"
                                    value={ERoleID[role]}
                                    name="role_id"
                                    className={cn(
                                        inputsStyles({variant: "check", error: !!errors.role_id}),
                                        "appearance-none peer checked:bg-purple")}/>
                                <Icon icon="uil:check" className={iconStyles()}/>
                                <span className={errors.role_id ? errorTextStyles({ error: true }) : ""}>
                                    {role === ERoleID.USER ? "Для личного использования" : "Для совместного использования"}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className={formContainerStyles()}>
                <Button
                    className="w-[342px]"
                    variant={EButtonVariant.BASE}
                    type="submit"
                    label="Зарегистрироваться"/>
                <div className={linkStyles()}>
                    <p>Уже есть аккаунт?</p>
                    <a href='/'>Войти</a>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;
