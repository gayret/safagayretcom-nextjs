import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import SuperPeer from '../public/assets/superpeer.svg'

export default function Footer() {
  return (
    <footer>
      <Link href='https://twitter.com/safa'>
        <i title='Twitter' className='ri-twitter-line'></i>
      </Link>
      <Link href='https://safa.medium.com'>
        <i title='Medium' className='ri-medium-line'></i>
      </Link>
      <Link href='https://github.com/gayret'>
        <i title='GitHub' className='ri-github-line'></i>
      </Link>
      <Link href='https://linkedin.com/in/safagayret'>
        <i title='LinkedIn' className='ri-linkedin-line'></i>
      </Link>
      <Link href='https://superpeer.com/gayret'>
        <Image title='superpeer' width={100} src={SuperPeer} alt='superpeer' />
      </Link>
    </footer>
  )
}
