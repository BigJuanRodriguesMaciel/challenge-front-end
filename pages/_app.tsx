import '../styles/global.scss'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import { useRouter } from 'next/router'
import { AuthProvider } from '../context/auth-provider'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      {router.pathname != '/' && <Header/>}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
