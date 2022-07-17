import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import bolttech from '../public/assets/images/logo/bolttech.png'
import Image from 'next/image'
import FormLogin from '../components/forms/login'

const Home: NextPage = () => {

  return (
    <div className={`${styles.mainDiv} d-flex`}>
        <div className={`d-flex j-c-center ${styles.left}`}>
          <div>
            <div className='d-flex j-c-center'>
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
        <div className='d-flex j-c-center'>
            <FormLogin/>
        </div>
    </div>
  )
}

export default Home
