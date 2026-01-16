import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import writingJSON from '../data/writing.json'

export default async function Writing() {
  return (
    <div className='bordered'>
      <h1>Yazı, kitap</h1>

      {writingJSON.map((time) => (
        <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />
      ))}
    </div>
  )
}
