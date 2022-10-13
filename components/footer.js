import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import SuperPeer from '../public/assets/superpeer.svg'

export default function Footer() {
  return (
    <footer>
      <Link href='https://twitter.com/safa'>
        <a target='_blank'>
          <i title='Twitter' className='ri-twitter-line'></i>
        </a>
      </Link>
      <Link href='https://safa.medium.com'>
        <a target='_blank'>
          <i title='Medium' className='ri-medium-line'></i>
        </a>
      </Link>
      <Link href='https://github.com/gayret'>
        <a target='_blank'>
          <i title='GitHub' className='ri-github-line'></i>
        </a>
      </Link>
      <Link href='https://linkedin.com/in/safagayret'>
        <a target='_blank'>
          <i title='LinkedIn' className='ri-linkedin-line'></i>
        </a>
      </Link>
      <Link href='https://superpeer.com/gayret'>
        <a target='_blank'>
          <Image title='superpeer' width={100} src={SuperPeer} alt='superpeer' />
        </a>
      </Link>
    </footer>
  )
}
