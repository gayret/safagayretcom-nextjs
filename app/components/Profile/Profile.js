import Image from 'next/image'
import ProfilePicture from '../../assets/img/ProfilePicture.webp'

export default function Profile() {
  return (
    <section className='profile-box image-and-text'>
      <Image src={ProfilePicture} alt='profile picture' />
      <h1>Safa Gayret</h1>
      <small>Yazılım Geliştirici</small>
      <p>JavaScript, ReactJS, VueJS, NextJS, TypeScript</p>
    </section>
  )
}
