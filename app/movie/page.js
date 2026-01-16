import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import movieJSON from '../data/movie.json'

export default async function Movie() {
  return (
    <div className='bordered'>
      <h1>Film</h1>

      {movieJSON.map((time) => (
        <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />
      ))}
    </div>
  )
}
