import { api } from "@/shared/api";
import {ISignInData, ISignInResponse} from "../type";


export const signInUser = async (data: ISignInData): Promise<ISignInResponse> => {
    const response = await api.post<ISignInResponse>("/user/login", data);
    return response.data;
};
