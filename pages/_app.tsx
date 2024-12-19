// file that tells the app where the template is and how to render it.
import type { AppProps } from "next/app";
import Layout from '../components/layout'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}