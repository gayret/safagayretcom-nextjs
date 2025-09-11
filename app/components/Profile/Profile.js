import Image from 'next/image'
import ProfilePicture from '../../assets/img/ProfilePicture.webp'
import BookPicture from './kitap.jpeg'
import Link from 'next/link'

export default function Profile() {
  return (
    <>
      <section className='profile-box image-and-text'>
        <Image src={ProfilePicture} alt='profile picture' />
        <h1>Safa Gayret</h1>
        <small>Kıdemli Yazılım Geliştirme Uzmanı</small>
        <p>JavaScript, ReactJS, VueJS, TypeScript</p>
      </section>

      <section>
        <Link
          className='book'
          href='https://www.kitapyurdu.com/kitap/erken-bulunmus-bir-intihar-mektubu-/561410.html'
        >
          <Image src={BookPicture} alt='profile picture' width={100} />
          <span>Yazdığım ilk roman</span>
        </Link>
      </section>
    </>
  )
}
