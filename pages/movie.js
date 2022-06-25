import Link from 'next/dist/client/link'

export default function Movie() {
  return (
    <div>
      <h1>Film</h1>
      <h2>Üretmek</h2>
      <p>Lise bittikten sonra kısa filmler çekmeye başladım.</p>
      <p>Hobi olarak fazlasıyla amatör çalışmalar yaptık.</p>
      <p>
        İbrahim Aksakal, Sefa Sayar, Mehmet Fıstık ve ben irili ufaklı birçok kısa film projesi
        ortaya koyduk.
      </p>
      <p>Yönettiğim bir kısa film dışında hiçbiri ödül almadı ya da ödül almaya yaklaşmadı.</p>
      <p>
        <Link href='https://www.youtube.com/watch?v=I1j4Nw3AXRA'>
          Kendinden Kaçmak (Escaping from Yourself)
        </Link>{' '}
        filmimle International Short Film Festival Kalmthout adlı festivalde 2. seçildik.
      </p>
      <p>Diğer kısa film projelerimi ise YouTube'da bulabilirsiniz.</p>
      <h2>Tüketmek</h2>
      <p>İyi filmler ve diziler izlemeye özen gösteririm.</p>
      <p>
        Tanıdığım insanlara çok sevecekleri filmleri nokta atışı önerebilecek kadar da çok film
        tükettim.
      </p>
      <p>Muhtelif saatlerde bir arkadışımın arayıp film önerisi istemesine alıştım.</p>
      <p>
        Belki de bunun için bir
        <Link href='http://www.imdb.com/list/ls003493446/'>favori film listesi</Link> hazırladım.
      </p>
      <p>
        2011'de oluşturduğum bu liste o kadar ilgi gördü ki, Google'da "Safa'nın favori filmleri"
        araması yapıldığında favori filmlerime ulaşılabiliyor.
      </p>
    </div>
  )
}
