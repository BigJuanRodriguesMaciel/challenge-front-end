import React, { createContext, useEffect, useState } from 'react'
import { getUSerLocalStorage, LoginRequest, setUserLocalStorage } from './utils'

export const AuthContext = createContext<any>({} as any)

export const AuthProvider = ({children}:any) => {
    const [user, setUser] = useState<any>()

    async function authenticate(email: string, password: string){
        const response = await LoginRequest(email, password)

        useEffect(() => {
          const user = getUSerLocalStorage()
          if(user) setUser(user)
        }, [])
        

        setUser(response)
        setUserLocalStorage(response)
    }
    
    function logout () {
        setUser(null)
        setUserLocalStorage(null)
    }
    
    // return(
        // <AuthContext.Provider value={{...user, authenticate, logout}}>
        //     {children}
        // </AuthContext.Provider>
    // )
}