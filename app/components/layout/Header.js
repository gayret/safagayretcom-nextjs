'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [activePath, setActivePath] = useState(window.location.pathname)

  const isActive = (path) => path === activePath

  const navLinks = [
    {
      path: '/',
      text: 'Merhaba!',
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
      path: '/software-articles',
      text: 'Yazılımla ilgili bazı makalelerim',
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
          <Link
            key={navLink.path}
            href={navLink.path}
            data-route-active={isActive(navLink.path)}
            onClick={() => setActivePath(navLink.path)}
          >
            {navLink.text}
          </Link>
        ))}
      </nav>
    </header>
  )
}
