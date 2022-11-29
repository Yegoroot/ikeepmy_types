import axios from 'axios'

import { API_URL } from '../config'
import { RESPONSE_MESSAGES } from '../types';

type Err = {
  message: string;
  response: any;
}

export const errorAxiosResponce = (error) => (error.response
  ? error.response.data
  : { error: RESPONSE_MESSAGES.UNKNOWN_ERROR, success: false })

const errorHandler = (err: Err) => {
  console.log(err.response.data, err.response.status, err.message)
  return Promise.reject(err)
}

export const instanceAxios = axios.create({
  withCredentials: true
})

instanceAxios.interceptors.request.use((req) => req, errorHandler)

instanceAxios.interceptors.response.use((res) => res, errorHandler)

instanceAxios.defaults.baseURL = API_URL


console.log('axios -->', axios);

export default instanceAxios
