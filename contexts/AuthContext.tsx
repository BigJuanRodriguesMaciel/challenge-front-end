import axios from "axios";
import { createContext, useState } from "react";
import { setCookie } from 'nookies'
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({} as AuthContextType  )

type AuthContextType = {
    dataUser: any,
    isAuthenticated: boolean,
    signIn: any,
    signUp: any
}

type signInDataType = {
    email: string,
    password: string
}

type signUpDataType = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
} 

export function AuthProvider({children}:any) {
    const [dataUser, setDataUser] = useState<any>(null)
    const isAuthenticated = !!dataUser

    async function signIn({email, password}:signInDataType) {
        const { data } = await axios.post<any>(
            'http://localhost:3333/auth/login',
            {email, password}
        )

        setCookie(undefined, 'boltech.token', data.token, {
             maxAge: 3600 
        })

        setDataUser(data.token)
        Router.push('/todo')
    }

    async function signUp({name, email, password, confirmPassword}:signUpDataType) {
        const { data } = await axios.post<any>(
            'http://localhost:3333/auth/register',
            {name, email, password, confirmPassword}
        )
        signIn({email, password})
    }

    return (
        <AuthContext.Provider value={{ dataUser, isAuthenticated, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}