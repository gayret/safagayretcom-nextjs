import Image from 'next/image'
import Link from 'next/link'
import profilePicture from '../public/assets/profile.jpg'
import dayjs from 'dayjs'

function Home(props) {
  return (
    <div>
      <div
        className='header'
        style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
      >
        <div className='left'>
          <h1>
            <span style={{ fontWeight: 'normal' }}>Ben</span> Safa Gayret
          </h1>
          <div>Yazılım geliştiririm,</div>
          <div>kısa film yönetirim</div>
          <div> ve yazılar yazarım.</div>
        </div>
        <div className='right'>
          <Image
            width={250}
            height={250}
            className='profile-picture'
            src={profilePicture}
            alt='Profile picture'
          />
        </div>
      </div>

      <div className='medium-posts'>
        <h3 className='title'>
          Medium yazılarım
          <Link href='https://safa.medium.com'>(Tümü)</Link>
        </h3>
        <ul className='non-style'>
          {props.mediumPosts.map((post) => (
            <li className='post' key={post.title} title={post.category}>
              <Link href={post.link}>
                <div style={{ cursor: 'pointer' }}>
                  {post.title}
                  <span className='date'> {dayjs(post.pubDate).format('DD MMM YY')}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
