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
    const { register, handleSubmit, formState: { errors }, setError, watch} = useForm<IFormData>();
    const { mutateAsync } = useSignUpMutation(setError);
    const onSubmit = async (data: IFormData) => {
        const formattedData = {
            ...data,
            role_id: Number(data.role_id),
        };
        await mutateAsync(formattedData);
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        watch
    };
};