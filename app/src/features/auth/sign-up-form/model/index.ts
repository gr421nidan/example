import { useSignUpMutation } from "@/entities/auth/sign-up/model";
import { useForm } from "react-hook-form";
import {ERoleID} from "@/entities/auth/sign-up/type";

interface IFormData {
    firstname: string;
    surname: string;
    email: string;
    password: string;
    role_id: ERoleID;
}

export const useSignUpForm = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<IFormData>();
    const { mutateAsync } = useSignUpMutation(setError);
    const onSubmit = async (data: IFormData) => {
        const formattedData = {
            ...data,
            role_id: Number(data.role_id),
        };
        try {
            await mutateAsync(formattedData);
            alert("Регистрация прошла успешно!");
        } catch (error) {
            alert("Ошибка при регистрации.");
        }
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};