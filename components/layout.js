import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className='wrapper'>
      <Head>
        <title>Safa Gayret</title>
        <meta name='description' content="Safa Gayret'in kişisel websitesi" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}
