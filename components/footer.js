import Link from 'next/dist/client/link'

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
