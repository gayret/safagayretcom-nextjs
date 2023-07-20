import Image from 'next/image'
import Link from 'next/link'
import profilePicture from '../public/assets/profile.jpg'
import mediumPosts from '../data/mediumPosts.json'

function Home() {
  function formatDate(date) {
    const options = { year: 'numeric', month: 'short' }
    return new Date(date).toLocaleDateString('tr-TR', options)
  }

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
      <div className='contents'>
        <div className='videos'>
          <h2>Yer aldığım bazı video yayınlar</h2>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/videoseries?list=PLY3mpMOY7G-fzfQMKbZnCwTsiFPA-yUgo'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DWm1RvYg0kI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <ul>
          <h2>Teknoloji ile ilgili yazılarım</h2>
          {mediumPosts.rss.channel.item.map((post) => (
            <Link href={post.link} key={post.guid}>
              <li className='post'>
                <span>{formatDate(post.pubDate)}</span>
                <a>
                  {post.title.__cdata}
                  <div>
                    {post.category.map((category) => (
                      <span key={category.__cdata} className='category'>
                        {category.__cdata}
                      </span>
                    ))}
                  </div>
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
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
