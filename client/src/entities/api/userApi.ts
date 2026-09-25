import {api, apiAuth} from "@/http";
import {jwtDecode} from "jwt-decode";
import type {User} from "@/store/UserStore.ts";

type RegistrationType = {
    email: string,
    password: string
}


export const registration = async ({email, password}: RegistrationType) => {
    const {data} = await api.post('api/user/registration', {email, password, role: "ADMIN"})
    localStorage.setItem('token', data)
    return jwtDecode<User>(data)
}

export const login = async ({email, password}: RegistrationType) => {
    const {data} = await api.post('api/user/login', {email, password})
    localStorage.setItem('token', data)
    return jwtDecode<User>(data)
}

export const check = async () => {
    const {data} = await apiAuth.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode<User>(data.token)
}