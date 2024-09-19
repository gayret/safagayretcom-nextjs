import Image from "next/image";
import ProfilePicture from './assets/img/profile.webp'

export default function Home() {
  return (
    <>
      <section className="bordered">
        <div className="image-and-text">
          <Image src={ProfilePicture} alt="profile picture" />
          <div>
            <h1>Safa Gayret</h1>
            <small>Yazılım Mühendisi</small>
            <p>JavaScript, VueJS, ReactJS, HTML, CSS</p>
          </div>
        </div>
      </section>
    </>
  );
}
