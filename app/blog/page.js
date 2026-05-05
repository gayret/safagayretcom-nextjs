import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import blogJSON from '../data/blog.json'

export default async function Blog() {
  return (
    <div className='bordered'>
      <h1>Yazılımla ilgili bazı yazılarım</h1>
      {blogJSON.map((time) => (
        <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />
      ))}
    </div>
  )
}
