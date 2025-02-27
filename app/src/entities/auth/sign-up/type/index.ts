export enum ERoleID {
    ADMIN = 1,
    USER = 0,
}
export interface ISignUpData{
    firstname: string,
    surname: string;
    password: string;
    email: string;
    role_id:ERoleID
}

export interface ISignUpResponse{
    accessToken: string;
    id: number;
}