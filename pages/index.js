import Image from 'next/image'
import Link from 'next/link'
import profilePicture from '../public/assets/profile.jpg'
import dateFormatter from '../helpers/dateFormatter'

function Home(props) {
  return (
    <div>
      <div className='header'>
        <div className='image'>
          <Image
            width={150}
            height={150}
            className='profile-picture'
            src={profilePicture}
            alt='Profile picture'
          />
        </div>

        <div className='text'>
          <h1>
            <span style={{ fontWeight: 'normal' }}>Ben</span> Safa Gayret
          </h1>

          <div>Yazılım geliştiririm,</div>
          <div>kısa film yönetirim</div>
          <div> ve yazılar yazarım.</div>
        </div>
      </div>

      <div className='medium-posts'>
        <h3 className='title'>Son Makalelerim</h3>
        <ul className='non-style'>
          {props.mediumPosts.map((post) => (
            <li className='post' key={post.title} title={post.category}>
              <Link href={post.link}>
                <a>
                  <div style={{ cursor: 'pointer' }}>
                    {post.title}
                    <span className='date'> {dateFormatter(post.pubDate)}</span>
                  </div>
                </a>
              </Link>
            </li>
          ))}
          <li className='post'>
            <Link href={'https://safa.medium.com'}>
              <a style={{ cursor: 'pointer' }}>Tüm makaleler</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-bottom: 3em;
          box-shadow: inset 1px -1px 0 0 #000;
          border-radius: 1em;
        }

        .image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #000;
        }

        .post {
          border: 1px solid #555;
          border-radius: 1em;
          padding: 0.6em 0.8em;
          max-width: max-content;
          margin-bottom: 1em;
        }

        .text {
          color: skyblue;
        }

        .medium-posts {
          padding-top: 1em;
        }

        .title {
          text-align: center;
        }

        .title a {
          font-weight: 100;
          font-size: 0.8em;
          margin-left: 1em;
        }

        ul.non-style {
          max-width: 700px;
          margin: auto;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps(context) {
  const mediumPosts = await fetch(
    'https://api.factmaven.com/xml-to-json/?xml=https://safa.medium.com/feed'
  )
  const mediumPostsData = await mediumPosts.json()

  return {
    props: {
      mediumPosts: mediumPostsData.rss.channel.item,
    },
    revalidate: 3600,
  }
}

export default Home
