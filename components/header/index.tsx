import { Container, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import LogoutIcon from '@mui/icons-material/Logout';
import bolttech from '../../public/assets/images/logo/bolttech.png'

export default function Header() {
  return (
    <header className={`${styles.mainDiv} shadow`}>
        <Container>
            <div className="d-flex j-between">
                <div>
                    <Image src={bolttech.src} width={180} height={46}></Image>
                </div>
                <div className="d-flex" style={{width: '200px'}}>
                    <p>Juan Maciel</p>
                    <button>
                        <LogoutIcon/>
                    </button>
                </div>
            </div>
        </Container>
    </header>
  )
}