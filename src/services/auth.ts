/* eslint-disable no-return-await */
import { SuccessSignByLoginResponse, ErrorLoginResponse, SignInLoginBody } from '../types'
import { SIGN_IN_URL } from '../config'
import instanceAxios, { errorAxiosResponce } from '../utils/axios'

export const loginService = async ({ phone, password }: SignInLoginBody) => await instanceAxios
  .post<SuccessSignByLoginResponse>(SIGN_IN_URL, { phone, password })
  .then((d) => d.data)
  .catch<ErrorLoginResponse>(errorAxiosResponce)
