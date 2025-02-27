import { useSignInMutation } from "@/entities/auth/sign-in/model";
import { useForm } from "react-hook-form";

interface IFormData {
    email: string;
    password: string;
}

export const useSignInForm = () => {
    const { register, handleSubmit, formState: { errors }, setError  } = useForm<IFormData>();
    const { mutateAsync } = useSignInMutation(setError);
    const onSubmit = async (data: IFormData) => {
        await mutateAsync(data);
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};