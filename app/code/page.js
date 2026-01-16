import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import codeJSON from '../data/code.json'

export default async function Code() {
  return (
    <div className='bordered'>
      <h1>Kod</h1>

      {codeJSON.map((time) => (
        <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />
      ))}
    </div>
  )
}
