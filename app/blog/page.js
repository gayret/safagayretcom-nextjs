import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import blogJSON from '../data/blog.json'

export default async function Blog() {
  return (
    <div className='bordered'>
      <p>Yazılımla ilgili bazı yazılarım</p>
      {blogJSON.map((time) => (
        <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />
      ))}
    </div>
  )
}
