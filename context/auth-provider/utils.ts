import { API } from "../../services/api"

export function setUserLocalStorage (user:any) {
    localStorage.setItem('user', user)
}

export function getUSerLocalStorage () {
    const json = localStorage.getItem('user')

    if(!json) return {}
    else return JSON.parse(json)
}

export async function LoginRequest(email:string, password:string) {
    try {
        const response = await API.post('auth/login', {email, password})
        return response
    } catch (error) {
        return {}
    }
}
