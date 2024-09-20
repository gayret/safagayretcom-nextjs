import Link from "next/link";
import "./globals.css";
import linkedin from './assets/img/linkedin.svg'
import github from './assets/img/github.svg'
import twitter from './assets/img/twitter.svg'
import medium from './assets/img/medium.svg'
import Image from "next/image";
import { Hedvig_Letters_Sans } from 'next/font/google'
const inter = Hedvig_Letters_Sans({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: "Safa Gayret",
  description: "Safa Gayret'in kişisel web sayfası",
};

const navLinks = [
  {
    path: '/',
    text: 'Merhaba!'
  },
  {
    path: '/code',
    text: 'Kod',
  },
  {
    path: '/software-articles',
    text: 'Yazılımla ilgili bazı makalelerim'
  },
  {
    path: '/movie',
    text: 'Film'
  },
  {
    path: '/writing',
    text: 'Yazı'
  }
]

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <header>
          <nav>
            {navLinks.map((navLink) => <Link key={navLink.text} href={navLink.path}>{navLink.text}</Link>)}
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/safagayret">
              <Image src={linkedin} width="15" alt="linkedin" />
            </a>
            <a href="https://github.com/gayret">
              <Image src={github} width="15" alt="github" />
            </a>
            <a href="https://x.com/safa">
              <Image src={twitter} width="17" alt="twitter" />
            </a>
            <a href="https://safa.medium.com">
              <Image src={medium} width="15" alt="medium" />
            </a>
          </div>

          <div className="description">
            Bu sitenin kodlarına <a href="https://github.com/gayret/safagayretcom-nextjs">GitHub</a>&apos;dan erişilebilir.
          </div>
        </footer>
      </body>

    </html>
  );
}
