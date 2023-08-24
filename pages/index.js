import Image from 'next/image'
import Link from 'next/link'
import profilePicture from '../public/assets/profile.jpg'

function Home() {
  return (
    <div>
      <div className='welcome'>
        <div className='info'>
          <div className='image'>
            <Image
              width={270}
              height={270}
              className='profile-picture'
              src={profilePicture}
              alt='Profile picture'
            />
          </div>
          <div className='text'>
            <h1 className='name'>Safa Gayret</h1>
            <span className='role'>Frontend Developer</span>
            <div className='description'>
              <p>Lise ve Üniversite&apos;de Bilgisayar Programcılığı okudum.</p>
              <p>Uzmanlık alanım JavaScript, VueJS, ReactJS, HTML ve CSS.</p>
            </div>

            <div className='links'>
              <Link href='https://youtube.com/@tech-coll'>
                <a target='_blank'>
                  <i title='YouTube' className='ri-youtube-line'></i>
                </a>
              </Link>
              <Link href='https://twitter.com/safa'>
                <a target='_blank'>
                  <i title='Twitter' className='ri-twitter-line'></i>
                </a>
              </Link>
              <Link href='https://safa.medium.com'>
                <a target='_blank'>
                  <i title='Medium' className='ri-medium-line'></i>
                </a>
              </Link>
              <Link href='https://github.com/gayret'>
                <a target='_blank'>
                  <i title='GitHub' className='ri-github-line'></i>
                </a>
              </Link>
              <Link href='https://linkedin.com/in/safagayret'>
                <a target='_blank'>
                  <i title='LinkedIn' className='ri-linkedin-line'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .welcome {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80vh;
        }

        .info {
          display: flex;
          align-items: center;
          gap: 2em;
          padding: 2em;
          box-shadow: inset 0px 0px 1px 1px rgba(255, 255, 255, 0.1);
          border-radius: 1em;
          max-width: 700px;
          transition: all 1s;
        }

        .info:hover {
          box-shadow: inset -1px -1px 1px 0px rgba(255, 255, 255, 0.3);
        }

        .image {
          width: 200px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          overflow: hidden;
        }

        .name {
          margin-block: 0;
        }

        .role {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 100;
        }

        .description {
          margin-block: 2em;
        }

        .description p {
          margin-block: 0;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        .posts {
          max-width: 600px;
          margin: auto;
          margin-top: 2em;
        }

        .post {
          cursor: pointer;
          display: grid;
          padding: 0.5em 0;
          grid-template-columns: 80px 1fr;
        }

        .post a {
          color: #fff;
          text-wrap: balance;
        }

        .post:hover {
          background-color: #33333e;
        }

        .category {
          margin-right: 0.5em;
          color: #222;
        }

        .post:hover .category {
          color: skyblue;
        }

        .links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1em;
          cursor: pointer;
          font-size: 1.2em;
        }

        @media only screen and (max-width: 600px) {
          .info {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
