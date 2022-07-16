import Link from 'next/dist/client/link'

export default function Header() {
  return (
    <div>
      <h1>Kod</h1>

      <p>&quot;Yazılım&quot; kelimesiyle ilkokulda 2004 yılında tanıştım.</p>
      <p>O sıralar Microsoft FrontPage ile basit web arayüzler yapmayı öğrendim.</p>
      <p>
        Sonrasında HTML, CSS ve JS üzerine geliştirmeler yaparak lise hayatıma başladım. Ticaret
        Meslek Lisesi&apos;ni seçmemin tek nedeni Bilgisayar Programcılığı bölümünün olmasıydı.
      </p>
      <p>
        Lise eğitimim sırasında C# ve asp.NET ile tanıştım. Desktop ve Web geliştirmeler yaptım. İlk
        web sitemi (safagayret.com) bu teknolojilerle geliştirip yayınladım.
      </p>
      <p>
        Ardından üniversitede de Bilgisayar Programcılığı okudum. C, Delphi, Java gibi diller
        hakkında fikir sahibi oldum.
      </p>
      <p>
        Üniversiteye başladığımda yarı zamanlı olarak yakınlarıma basit web siteler geliştirdim.
        Yazılımdan para kazanmaya böyle başladım.
      </p>
      <p>
        Profesyonel yazılım hayatıma Kahramanmaraş Sütçü İmam Üniversitesi, Teknokent Binasında yer
        alan Hey Teknoloji firmasında başladım.
      </p>
      <p>Bir buçuk yıl sonra Tekrom (TSoft) Teknoloji firmasına geçiş yaptım.</p>
      <p>
        Profesyonel hayatım boyunca Frontend teknolojileri üzerine yoğunlaştım. VueJS ve NuxtJS
        teknolojilerinde uzmanlaştım.
      </p>
      <p>VueJS mentörlüğü yapmaya başladım.</p>
      <h2>Kariyer</h2>
      <p>Şimdilerde yoğun olarak VueJS ve NuxtJS projeler geliştiriyorum.</p>
      <p>
        Bu websitesini de NextJS ile geliştirdim, kodlarına{' '}
        <Link href='https://github.com/gayret/safagayretcom-nextjs'>GitHub</Link>&apos;dan
        ulaşılabilir.
      </p>
    </div>
  )
}
