import Link from 'next/link'
export default function Header() {
  return (
    <header>
      <div className='logo'>
        <Link href='/'>SG</Link>
      </div>
      <nav>
        <Link href='/code'>
          <a className='nav-item'>Kod</a>
        </Link>
        <Link href='/movie'>
          <a className='nav-item'>Film</a>
        </Link>
        <Link href='/writing'>
          <a className='nav-item'>Yazı / Kitap</a>
        </Link>
      </nav>
      <style jsx>{`
        header {
          padding: 1em 0;
        }

        .nav-item {
          cursor: pointer;
          border: 1px solid #fff;
          border-radius: 0.5em;
          padding: 0.1em 0.4em 0.2em 0.4em;
        }

        .nav-item:hover {
          background-color: #fff;
          color: #000;
        }
      `}</style>
    </header>
  )
}
