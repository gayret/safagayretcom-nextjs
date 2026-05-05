import quotes from './quotes.json'

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
      }}
    >
      <div
        style={{ backgroundColor: 'transparent', border: 'none' }}
        data-ataturk-quote-widget
        data-language='tr'
        data-theme='light'
        data-background-color='#f8f8f8'
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
