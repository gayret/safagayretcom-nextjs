import Image from 'next/image'
import linkSvg from '../../assets/img/link.svg'
import Link from 'next/link'

export default function TimeLineCard({ texts, date, link, description }) {
  return (
    <div className='time-line-card'>
      <span className='time-line-card-date'>{date}</span>
      {texts.map((t) => (
        <div key={t} className='time-line-card-text'>
          {t}
          {description && <p className='time-line-card-description'>{description}</p>}
        </div>
      ))}

      <div className='time-line-footer'>
        {link && (
          <Link href={link} target='_blank'>
            <Image src={linkSvg} alt='link' width={15} />
          </Link>
        )}
      </div>
    </div>
  )
}
