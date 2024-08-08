export interface IRequestUser {
    email: string;
    password: string;

}

export interface IResponseUser {
    email: string;
    password: string;
    id: number
}

export interface IResponseLogin{
    message: string;
}