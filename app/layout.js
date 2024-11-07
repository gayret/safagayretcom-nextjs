import './globals.css'
import { Hedvig_Letters_Sans } from 'next/font/google'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
const font = Hedvig_Letters_Sans({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Safa Gayret',
  description: "Safa Gayret'in kişisel web sayfası",
}

export default function RootLayout({ children }) {
  return (
    <html lang='tr'>
      <body className={font.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
