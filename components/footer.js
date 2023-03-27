import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import SuperPeer from '../public/assets/superpeer.svg'

export default function Footer() {
  return (
    <footer>
      <div className='copyrigth'>
        Bu sitenin kodlarına
        <Link href='https://github.com/gayret/safagayretcom-nextjs'>
          <a target='_blank'> GitHub</a>
        </Link>
        &apos;dan ulaşılabilir.
      </div>
      <div className='links'>
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
      </div>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1em;
        }
        .copyrigth {
          font-size: 0.8em;
          color: #999;
        }

        .links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1em;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          footer {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
          }
      `}</style>
    </footer>
  )
}
