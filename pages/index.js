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
      <style jsx>{`
        .header {
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

        .title a {
          font-weight: 100;
          font-size: 0.8em;
          margin-left: 1em;
        }
      `}</style>
    </div>
  )
}

let posts = []
export async function getStaticProps(context) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '270cedef62msh156ab317854adb5p1b1e8bjsne67ae12a76ce',
      'X-RapidAPI-Host': 'medium2.p.rapidapi.com',
    },
  }

  fetch('https://medium2.p.rapidapi.com/user/3ede4c648e44/articles', options)
    .then((response) => response.json())
    .then((response) => {
      response.associated_articles.forEach(async (postId) => {
        await fetch(`https://medium2.p.rapidapi.com/article/${postId}`, options)
          .then((response) => response.json())
          .then((post) => {
            posts.push(post)
          })
      })
    })
    .catch((err) => console.error(err))
    .finally(() => {
      posts = posts.slice(0, 6)
    })

  return {
    props: {
      mediumPosts: posts,
    },
    revalidate: 3600,
  }
}

export default Home
