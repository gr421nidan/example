import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../api";
import { ISignUpData, ISignUpResponse } from "../type";

export const useSignUpMutation = (setError: any) => {
    return useMutation<ISignUpResponse, Error, ISignUpData>({
        mutationFn: signUpUser,
        onSuccess: (data) => {
            console.log("Регистрация успешна, токен:", data.accessToken);
        },
        onError: (error: any) => {
            if (error.response?.status === 409 && error.response?.data?.type === "not_unique" && error.response?.data?.property === "email") {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
        },
    });
};
