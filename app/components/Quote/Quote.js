import quotes from './quotes.json'
import Image from 'next/image'
import ATATURK from '../../assets/img/ATATURK.png'

export default function Quote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        background: '#fff',
      }}
    >
      <div
        style={{ backgroundColor: 'transparent', border: 'none' }}
        data-ataturk-quote-widget
        data-language='tr'
        data-theme='light'
      ></div>
      <script
        async
        src='https://ataturk-kronolojisi.org/widget/quote.js'
        data-language='tr'
        data-theme='light'
      ></script>
    </div>
  )
}
