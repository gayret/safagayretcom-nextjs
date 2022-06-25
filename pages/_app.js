import '../styles/globals.css'
import Layout from '../components/layout'
import 'remixicon/fonts/remixicon.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
