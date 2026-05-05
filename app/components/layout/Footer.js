import Image from 'next/image'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import twitter from '../../assets/img/twitter.svg'
import medium from '../../assets/img/medium.svg'
import bluesky from '../../assets/img/bluesky.svg'
import Quote from '../Quote/Quote'

export default function Footer() {
  return (
    <footer>
      <div className='social-links'>
        <a href='https://www.linkedin.com/in/safagayret' title='LinkedIn'>
          <Image src={linkedin} width='23' alt='linkedin' />
        </a>
        <a href='https://github.com/gayret' title='GitHub'>
          <Image src={github} width='28' alt='github' />
        </a>
        <a href='https://x.com/safa' title='Twitter'>
          <Image src={twitter} width='30' alt='twitter' />
        </a>
        <a href='https://safa.medium.com' title='Medium'>
          <Image src={medium} width='29' alt='medium' />
        </a>
        <a href='https://bsky.app/profile/safagayret.bsky.social' title='Bluesky'>
          <Image src={bluesky} width='24' alt='bluesky' />
        </a>
      </div>

      <Quote />

      <div className='description'>
        Bu sitenin kodlarına <a href='https://github.com/gayret/safagayretcom-nextjs'>GitHub</a>
        &apos;dan erişilebilir.
      </div>
    </footer>
  )
}
