import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import bolttech from '../public/assets/images/logo/bolttech.png'
import Image from 'next/image'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

async function handleSubmit(e: any, name:string='', email:string, password:string, confirmPassword:any = null) {
  e.preventDefault();
  const url = confirmPassword || name ? 'http://localhost:3333/auth/register' : 'http://localhost:3333/auth/login'
  const obj = confirmPassword || name ? { name, email, password, confirmPassword } : { email, password }
  try {
    const { data } = await axios.post<any>(
      url,
      obj
    );
    localStorage.setItem('user', data.token)
    toast(data.msg);  
    window.location.href = "http://localhost:3000/todo";
  }
  catch (error) {
    console.log(`>`, error)
    toast('Algo de errado ocorreu');
  }
}

const Home: NextPage = () => {
  
  const [showPassword, setShowPassword] = useState(false)
  const [register, setRegister] = useState(false)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState()

  return (
    <div className={`${styles.mainDiv} d-flex`}>
        <div className={`d-flex j-c-center ${styles.left}`}>
          <div>
            <div className="d-flex j-c-center">
              <Image src={bolttech.src} width={210} height={76}/>
            </div>
            <div>
              <p>
                Gostaria de agradecer a todos pela oportunidade! <br/>
                Espero sinceramente conseguir trabalhar com vocês. <br />
                Obrigado!
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex j-c-center">
            <form action="">
                <h2>Login</h2>
                {
                  register &&
                  <div className={`${styles.inputPassword} position-relative`}>
                    <input
                    onChange={(e:any) => setName(e.target.value)}
                    value={name}
                    type="text" required id="name" placeholder="Username"/>
                  </div>
                }
                <input
                onChange={(e:any) => setEmail(e.target.value)}
                value={email}
                type="email" required id="e-mail" placeholder="E-mail"/>
                <div className={`${styles.inputPassword} position-relative`}>
                  <input
                  onChange={(e:any) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? 'text' : 'password'} required id="password" placeholder="Password"/>
                  <div
                  onClick={(e:any) => setShowPassword(!showPassword)}
                  className="position-absolute hover-pointer">
                    {showPassword ? <VisibilityOffIcon/> : <RemoveRedEyeIcon/>}
                  </div>
                </div>
                {
                  register &&
                  <div className={`${styles.inputPassword} position-relative`}>
                    <input
                    onChange={(e:any) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type={showPassword ? 'text' : 'password'} required id="password" placeholder="Password"/>
                    <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="position-absolute hover-pointer">
                      {showPassword ? <VisibilityOffIcon/> : <RemoveRedEyeIcon/>}
                    </div>
                  </div>
                }

                <button onClick={(e:any) => {handleSubmit(e, name, email, password, confirmPassword)}}>{!register ? 'Log in' : 'Register'}</button>
                <div
                onClick={() => setRegister(!register)}
                className="d-flex j-c-center hover-pointer">
                  <h3>{!register ? <>Novo usuário? <strong>Cadastre-se</strong></> : <>Já possui conta? <strong>Retornar para Login</strong></>}</h3>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Home
