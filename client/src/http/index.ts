import * as axios from "axios";
import type { InternalAxiosRequestConfig} from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
})

const apiAuth = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
})

const authInterceptor =
    (config : InternalAxiosRequestConfig) : InternalAxiosRequestConfig  => {

    try {
        const token = localStorage.getItem('token')
        if(token) {
            config.headers = config.headers || {}

            config.headers.Authorization = `Bearer ${token}`
        }
    } catch (e) {
        console.error('Error in auth interceptor:', e)
    }

    return config
}

apiAuth.interceptors.request.use(authInterceptor)

export  {
    api,
    apiAuth
}