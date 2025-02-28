import {useSignUpForm} from "../model";
import Input from "@/shared/ui/inputs/base-input";
import Button, {EButtonVariant} from "@/shared/ui/buttons";
import {ERoleID} from "@/entities/auth/sign-up/type";
import icon from '@/assets/icon.svg';
import PasswordInput from "@/shared/ui/inputs/password-input";
import {inputsStyles} from "@/shared/ui/inputs/style.ts";
import {cn} from "@/shared/utils/cn";
import InputCheckboxRadio from "@/shared/ui/inputs/checkbox-radio-input";

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,

    } = useSignUpForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col px-[76px] py-[40px] gap-[62px] w-[626px] bg-white rounded-[45px]">
            <div className="flex flex-col gap-[45px] items-center">
                <div className="bg-lightPurple rounded-[12px] px-3 w-fit">
                    <h2>Регистрация</h2>
                </div>

                <img src={icon} width="100" alt="Иконка облачного хранилища"/>
                <div className="flex flex-col gap-[24px]">

                    <div>
                        <Input
                            {...register("firstname", {
                                required: "Поле обязательно к заполнению",
                                pattern: {
                                    value: /^[А-Яа-яЁё\-]{1,255}$/,
                                    message: "Поле введено некорректно"
                                }
                            })}
                            placeholder="Имя*"
                            className={cn(inputsStyles({ error: !!errors.firstname }), "w-[474px]")}
                        />
                        {errors.firstname && <p className="pt-1 text-errorPrimary">{errors.firstname.message}</p>}
                    </div>
                    <div>
                        <Input
                            {...register("surname", {
                                required: "Поле обязательно к заполнению",
                                pattern: {
                                    value: /^[А-Яа-яЁё\-]{1,255}$/,
                                    message: "Поле введено некорректно"
                                }
                            })}
                            placeholder="Фамилия*"
                            className={cn(inputsStyles({ error: !!errors.surname }), "w-[474px]")}
                        />
                        {errors.surname && <p className="pt-1 text-errorPrimary">{errors.surname.message}</p>}
                    </div>
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
                            placeholder="Пароль*"
                            className={cn(inputsStyles({ error: !!errors.password }), "w-[474px]")}
                        />
                        {errors.password && <p className="pt-1 text-errorPrimary">{errors.password.message}</p>}
                    </div>

                    <div className="flex flex-col gap-[23px] justify-start">
                        <label
                            className={`flex items-center gap-2 ${errors.role_id ? "text-errorPrimary" : ""}`}
                        >
                            <InputCheckboxRadio
                                {...register("role_id", { required: "Выберите форму использования" })}
                                type="radio"
                                value={ERoleID.USER}
                                name="role_id"
                                className={cn(inputsStyles({ error: !!errors.role_id }))}
                            />
                            <span className={`${errors.role_id ? "text-errorPrimary" : ""}`}>
                                Для личного использования
                            </span>
                        </label>

                        <label
                            className={`flex items-center gap-2 ${errors.role_id ? "text-errorPrimary" : ""}`}
                        >
                            <InputCheckboxRadio
                                {...register("role_id", { required: "Выберите форму использования" })}
                                value={ERoleID.ADMIN}
                                type="radio"
                                name="role_id"
                                className={cn(inputsStyles({ error: !!errors.role_id }))}
                            />
                            <span className={`${errors.role_id ? "text-errorPrimary" : ""}`}>
                                Для совместного использования
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[24px] items-center">
                <Button
                    className="w-[342px]"
                    variant={EButtonVariant.BASE}
                    type="submit"
                    label="Зарегистрироваться"
                />
                <div className="flex gap-2 text-[20px]">
                    <p>Уже есть аккаунт?</p>
                    <a href='/'>Войти</a>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;
