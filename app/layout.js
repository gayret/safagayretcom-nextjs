import Link from "next/link";
import "./globals.css";
import linkedin from './assets/img/linkedin.svg'
import github from './assets/img/github.svg'
import twitter from './assets/img/twitter.svg'
import medium from './assets/img/medium.svg'
import Image from "next/image";

export const metadata = {
  title: "Safa Gayret",
  description: "Safa Gayret'in kişisel web sayfası",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <header>
          <nav>
            <Link href={'/'}>֎</Link>
            <Link href={'/code'}>Kod</Link>
            <Link href={'/movie'}>Film</Link>
            <Link href={'/writing'}>Yazı</Link>
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
