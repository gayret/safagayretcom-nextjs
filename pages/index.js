import Image from 'next/image'
import Link from 'next/link'
import profilePicture from '../public/assets/profile.jpg'
import mediumPosts from '../data/mediumPosts.json'

function Home() {
  return (
    <div>
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
          <h1>
            <span style={{ fontWeight: 'normal' }}>Ben</span> Safa Gayret
          </h1>
          <p style={{ margin: 0 }}>Yazılım geliştiririm,</p>
          <p style={{ margin: 0 }}>kısa film yönetirim</p>
          <p style={{ margin: 0 }}> ve yazılar yazarım.</p>
        </div>
      </div>
      <ul className='posts'>
        <h3 style={{ textAlign: 'center' }}>Medium'daki son yazılarım</h3>
        {mediumPosts.rss.channel.item.map((post) => (
          <Link href={post.link} key={post.guid}>
            <li className='post'>
              <p> {post.title.__cdata} </p>
            </li>
          </Link>
        ))}
      </ul>
      <style jsx>{`
        .info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-bottom: 3em;
          box-shadow: inset 1px -1px 0 0 #000;
          border-radius: 1em;
          max-width: 600px;
          margin: auto;
        }

        .image {
          width: 270px;
          height: 270px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #000;
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
          padding: 0 1em;
          display: flex;
          align-items: center;
          max-width: max-content;
        }

        .post:hover {
          background-color: #33333e;
        }

        @media only screen and (max-width: 600px) {
          .image {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
