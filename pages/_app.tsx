import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { useRouter } from 'next/router'
import Header from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AuthProvider>
      {router.pathname != '/' && <Header/>}
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
