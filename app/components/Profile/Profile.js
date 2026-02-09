import Image from 'next/image'
import ProfilePicture from '../../assets/img/ProfilePicture.png'

export default function Profile() {
  return (
    <>
      <section className='profile-box image-and-text'>
        <Image src={ProfilePicture} alt='profile picture' />
        <h1>Safa Gayret</h1>
        <small>Kıdemli Yazılım Geliştirme Uzmanı</small>
        <p>JavaScript</p>
      </section>
    </>
  )
}
