import { SuccessSignByLoginResponse, ErrorLoginResponse, SignInLoginBody } from '../types';
export declare const loginService: ({ phone, password }: SignInLoginBody) => Promise<SuccessSignByLoginResponse | ErrorLoginResponse>;
