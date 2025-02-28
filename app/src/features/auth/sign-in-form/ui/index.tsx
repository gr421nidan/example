import {useSignInForm} from "../model";
import Input from "@/shared/ui/inputs/base-input";

import Button, {EButtonVariant} from "@/shared/ui/buttons";
import icon from '@/assets/icon.svg';
import PasswordInput from "@/shared/ui/inputs/password-input";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/ui/inputs/style.ts";


const SignInForm = () => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
    } = useSignInForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col px-[76px] pb-[40px] pt-[52px] gap-[120px] w-[626px] min-h-[697px] bg-white rounded-[45px]">
            <div className="flex flex-col gap-[30px] items-center">
                <div className="bg-lightPurple rounded-[12px] px-3 w-fit">
                    <h2>Авторизация</h2>
                </div>
                <div className="flex flex-col gap-[48px] items-center">
                    <img src={icon} width="100" alt="Иконка облачного хранилища"/>
                    <div className="flex flex-col gap-[24px]">
                        <div>
                            <Input
                                {...register("email", {
                                    required: "Поле обязательно к заполнению",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Поле введено некорректно"
                                    }
                                })}
                                type="email"
                                placeholder="E-mail*"
                                className={cn(inputsStyles({ error: !!errors.email }), "w-[474px]")}
                            />
                            {errors.email && <p className="pt-1 text-errorPrimary">{errors.email.message}</p>}
                        </div>
                        <div>
                            <PasswordInput
                                {...register("password", {
                                    required: "Поле обязательно к заполнению",
                                    minLength: {
                                        value: 8,
                                        message: "Пароль должен содержать от 8 до 65 символов"
                                    },
                                    maxLength: {
                                        value: 65,
                                        message: "Пароль должен содержать от 8 до 65 символов"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9!@#$%^&*()_+.[\]{};":'<>?,/~`-]{8,65}$/,
                                        message: "Поле введено некорректно"
                                    }
                                })}
                                type="text"
                                placeholder="Пароль*"
                                className={cn(inputsStyles({ error: !!errors.password }), "w-[474px]")}
                            />
                            {errors.password && <p className="pt-1 text-errorPrimary">{errors.password.message}</p>}
                        </div>
                        <div className="flex gap-2 text-[20px] justify-center">
                            <p>Забыли пароль?</p>
                            <a href='/'>Восстановить</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col gap-[24px] items-center">
                <Button
                    className="w-[172px]"
                    variant={EButtonVariant.BASE}
                    type="submit"
                    label="Войти"
                />
                <div className="flex gap-2 text-[20px]">
                    <p>Нет аккаунта?</p>
                    <a href='/'>Зарегистрироваться</a>
                </div>
            </div>
        </form>
    );
};

export default SignInForm;
