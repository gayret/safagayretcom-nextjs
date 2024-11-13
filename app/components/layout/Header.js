'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isActive = (path) => path === pathname

  const navLinks = [
    {
      path: '/',
      text: 'Merhaba!',
    },
    {
      path: '/blog',
      text: 'Blog',
    },
    {
      path: '/code',
      text: 'Kod',
    },
    {
      path: '/projects',
      text: 'Projelerim',
    },
    {
      path: '/movie',
      text: 'Film',
    },
    {
      path: '/writing',
      text: 'Yazı',
    },
  ]

  return (
    <header>
      <nav>
        {navLinks.map((navLink) => (
          <Link key={navLink.path} href={navLink.path} data-route-active={isActive(navLink.path)}>
            {navLink.text}
          </Link>
        ))}
      </nav>
    </header>
  )
}
