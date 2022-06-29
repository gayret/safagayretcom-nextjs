import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className='wrapper'>
      <Head>
        <meta name='description' content="Safa Gayret'in kişisel websitesi" />
        <meta
          name='google-site-verification'
          content='l1fhO9meJ2Mp9-ax8hseP7rxtAjZx9RIIk58ya-Dh3k'
        />
        <link rel='icon' href='/favicon.ico' />
        <title>Safa Gayret</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}
