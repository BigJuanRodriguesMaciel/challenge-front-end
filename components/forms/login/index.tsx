import * as React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styles from '../../../styles/Home.module.scss'
import { AuthContext } from "../../../contexts/AuthContext";

export default function FormLogin() {
    const [showPassword, setShowPassword] = useState(false)
    const [registerUser, setRegisterUser] = useState(false)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const { signIn, signUp } = useContext(AuthContext)

    const handleSignIn = async (event:any) => {
        event.preventDefault()
        await signIn({email, password})
    }

    const handleSignUp = async (event:any) => {
        event.preventDefault()
        await signUp({name, email, password, confirmPassword})
    }
    
    return (
        <form onSubmit={!registerUser ? handleSignIn : handleSignUp}>
            <h2>Login</h2>
            {
                registerUser &&
                <div className={`${styles.inputPassword} position-relative`}>
                <input
                onChange={(e:any) => setName(e.target.value)}
                value={name}
                type='text' required id='name' placeholder='Username'/>
                </div>
            }
            <input
            onChange={(e:any) => setEmail(e.target.value)}
            name='email'
            value={email}
            type='email' required id='e-mail' placeholder='E-mail'/>
            <div className={`${styles.inputPassword} position-relative`}>
                <input
                onChange={(e:any) => setPassword(e.target.value)}
                value={password}
                name='password'
                type={showPassword ? 'text' : 'password'} required id='password' placeholder='Password'/>
                <div
                onClick={(e:any) => setShowPassword(!showPassword)}
                className='position-absolute hover-pointer'>
                {showPassword ? <VisibilityOffIcon/> : <RemoveRedEyeIcon/>}
                </div>
            </div>
            {
                registerUser &&
                <div className={`${styles.inputPassword} position-relative`}>
                <input
                onChange={(e:any) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type={showPassword ? 'text' : 'password'} required id='password' placeholder='Password'/>
                <div
                onClick={() => setShowPassword(!showPassword)}
                className='position-absolute hover-pointer'>
                    {showPassword ? <VisibilityOffIcon/> : <RemoveRedEyeIcon/>}
                </div>
                </div>
            }

            {/* <button onClick={(e:any) => {handleSignIn(e, name, email, password, confirmPassword)}}>{!registerUser ? 'Log in' : 'Register'}</button> */}
            <button>{!registerUser ? 'Log in' : 'Register'}</button>
            <div
            onClick={() => setRegisterUser(!registerUser)}
            className='d-flex j-c-center hover-pointer'>
                <h3>{!registerUser ? <>Novo usuário? <strong>Cadastre-se</strong></> : <>Já possui conta? <strong>Retornar para Login</strong></>}</h3>
            </div>
        </form>
    )
}