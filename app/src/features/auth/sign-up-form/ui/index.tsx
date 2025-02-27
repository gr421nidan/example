import {useSignUpForm} from "../model";
import Input, {EInputVariant} from "@/shared/ui/inputs/input";
import Button, {EButtonVariant} from "@/shared/ui/buttons";
import {ERoleID} from "@/entities/auth/sign-up/type";
import icon from '@/assets/icon.svg';

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
                            variant={EInputVariant.BASE}
                            placeholder="Имя*"
                            className={`w-[474px] ${errors.firstname ? "border-errorPrimary bg-errorSecondary" : ""}`}
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
                            variant={EInputVariant.BASE}
                            placeholder="Фамилия*"
                            className={`w-[474px] ${errors.surname ? "border-errorPrimary bg-errorSecondary" : ""}`}
                        />
                        {errors.surname && <p className="pt-1 text-errorPrimary">{errors.surname.message}</p>}
                    </div>
                    <div>
                        <Input
                            {...register("email", {
                                required: "Поле обязательно к заполнению",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                    message: "Поле введено некорректно"
                                }
                            })}
                            variant={EInputVariant.BASE}
                            type="email"
                            placeholder="E-mail*"
                            className={`w-[474px] ${errors.email ? "border-errorPrimary bg-errorSecondary" : ""}`}
                        />
                        {errors.email && <p className="pt-1 text-errorPrimary">{errors.email.message}</p>}
                    </div>
                    <div>
                        <Input
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
                            variant={EInputVariant.PASSWORD}
                            placeholder="Пароль*"
                            className={`w-[474px] ${errors.password ? "border-errorPrimary bg-errorSecondary" : ""}`}
                        />
                        {errors.password && <p className="pt-1 text-errorPrimary">{errors.password.message}</p>}
                    </div>

                    <div className="flex flex-col gap-[23px] justify-start">
                        <label className={`flex items-center gap-2 ${errors.role_id ? "text-errorPrimary" : ""}`}>
                            <Input
                                {...register("role_id", {required: "Выберите форму использования"})}
                                variant={EInputVariant.RADIO}
                                type="radio"
                                value={ERoleID.USER}
                                className={errors.role_id ? "border-errorPrimary" : ""}
                            />
                            <span
                                className={`${errors.role_id ? "text-errorPrimary" : ""}`}>Для личного использования</span>
                        </label>

                        <label className={`flex items-center gap-2 ${errors.role_id ? "text-errorPrimary" : ""}`}>
                            <Input
                                {...register("role_id", {required: "Выберите форму использования"})}
                                variant={EInputVariant.RADIO}
                                value={ERoleID.ADMIN}
                                type="radio"
                                className={errors.role_id ? "border-errorPrimary" : ""}

                            />
                            <span className={`${errors.role_id ? "text-errorPrimary" : ""}`}>Для совместного использования</span>
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
