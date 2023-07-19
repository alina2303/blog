import { AppProps } from 'next/app'
import GScript from '../components/google-script'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <GScript />
    <Component {...pageProps} />
  </>
}
