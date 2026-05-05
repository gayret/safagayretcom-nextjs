import Blog from '../blog/page'
import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import writingJSON from '../data/writing.json'

export default async function Writing() {
  return (
    <section>
      <Blog />
      <div className='bordered'>
        <h2>Diğer</h2>

        {writingJSON.map((time) => (
          <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />
        ))}
      </div>
    </section>
  )
}
