import quotes from './quotes.json'
import Image from 'next/image'
import ATATURK from '../../assets/img/ATATURK.png'

export default function Quote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <blockquote>
      <Image
        src={ATATURK}
        alt='Mustafa Kemal Atatürk'
        width={100}
        height={150}
        style={{ borderRadius: '50%' }}
      />
      <p>{randomQuote.quote}</p>
      <cite>{randomQuote.author}</cite>
    </blockquote>
  )
}
