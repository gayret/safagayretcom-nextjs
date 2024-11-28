import Image from 'next/image'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import twitter from '../../assets/img/twitter.svg'
import medium from '../../assets/img/medium.svg'
import bluesky from '../../assets/img/bluesky.svg'

export default function Footer() {
  return (
    <footer>
      <div className='social-links'>
        <a href='https://www.linkedin.com/in/safagayret'>
          <Image src={linkedin} width='15' alt='linkedin' />
        </a>
        <a href='https://github.com/gayret'>
          <Image src={github} width='15' alt='github' />
        </a>
        <a href='https://x.com/safa'>
          <Image src={twitter} width='17' alt='twitter' />
        </a>
        <a href='https://safa.medium.com'>
          <Image src={medium} width='15' alt='medium' />
        </a>
        <a href='https://bsky.app/profile/safagayret.bsky.social'>
          <Image src={bluesky} width='15' alt='bluesky' />
        </a>
      </div>

      <div className='description'>
        Bu sitenin kodlarına <a href='https://github.com/gayret/safagayretcom-nextjs'>GitHub</a>
        &apos;dan erişilebilir.
      </div>
    </footer>
  )
}
