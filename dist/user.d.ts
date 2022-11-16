export interface User {
    _id: string;
    id: string;
    name: string;
    phone: string;
    roles: Roles[];
    createdAt: Date;
    password: string;
    email?: string;
    creator?: ThisType<User>;
}
export declare enum Roles {
    SUPERADMIN = "superadmin",
    USER = "user",
    ADMIN = "admin",
    WASHER = "washer",
    DELEVER = "delever"
}
export interface VerifyNumberBody {
    phone: string;
}
export interface SignUpLoginBody {
    password: string;
    name: string;
    phone: string;
    code: string;
    email?: string;
}
export interface SignInLoginBody {
    phone: string;
    password: string;
}
export interface UpdatePasswordBody {
    phone: string;
    password: string;
    code: string;
}
