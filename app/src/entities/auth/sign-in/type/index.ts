export interface ISignInData{
    password: string;
    email: string;
}

export interface ISignInResponse{
    accessToken: string;
    id: number;
}