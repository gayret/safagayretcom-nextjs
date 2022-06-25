import Link from 'next/dist/client/link'

export default function Writing() {
  return (
    <div>
      <h1>Yazı</h1>
      <p>
        Lise zamanlarımda başlayan edebiyat merakım beni şiirler ve düşünce yazıları yazmaya
        yönlendirdi.
      </p>
      <p>Birçok düşünce yazım gazetelerde ve dergilerde yayınlandı.</p>
      <h2>Kitap</h2>
      <p>
        İlk romanım{' '}
        <Link href='https://www.kitapyurdu.com/kitap/erken-bulunmus-bir-intihar-mektubu-/561410.html'>
          Erken bulunmuş bir intihar mektubu
        </Link>
        'nu 2017'de yazdım.
      </p>
      <p>Pandemide yayınlamak için yayınevlerine gönderdim. 2020 yılında ilk baskısı çıktı.</p>
      <h2>Blog</h2>
      <p>
        2010 yılından beri <Link href='https://safagayret.blogspot.com'>blog</Link> yazıyorum. Belli
        bir çerçevede kalmamakla birlikte, genellikle kişisel sayıklamalar ve zırvalardan oluşuyor.
      </p>
      <h2>Medium</h2>
      <p>
        <Link href='https://safa.medium.com'>Medium</Link>'da genellikle yazılım (Frontend
        teknolojileri) üzerine yazılar yayınlıyorum.
      </p>
      <h2>Twitter</h2>
      <p>
        Mikrobloglar da her zaman ilgimi çekti. Uzun zamandır{' '}
        <Link href='https://twitter.com/safa'>Twitter</Link>'da aktifim.
      </p>
    </div>
  )
}
