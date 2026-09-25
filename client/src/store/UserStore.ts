import {makeAutoObservable} from "mobx";


export type User = {
    id: number;
    email: string;
    role: 'ADMIN' | 'USER';
    iat: number;
    exp: number;
}
export default class UserStore {
    _isAuth = false
    _user: User | null = null

    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth(value: boolean) {
        this._isAuth = value
    }

    setUser(user: User | null) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get isUser() {
        return this._user
    }
}