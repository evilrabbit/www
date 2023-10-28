import { GeistSans } from 'geist/font'

export default function MyApp({ Component, pageProps }) {
    return <div className={GeistSans.className}><Component {...pageProps} /></div>
}