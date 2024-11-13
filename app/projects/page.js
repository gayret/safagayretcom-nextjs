import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import { fetchAirtableTable } from '../lib/airtable'

export const revalidate = 3600

export default async function Projects() {
  const data = await fetchAirtableTable('projects')

  return (
    <div className='bordered'>
      <h1>Projelerim</h1>

      {data.map((time) => (
        <TimeLineCard
          key={time.texts}
          texts={time.texts}
          date={time.date}
          link={time.link}
          description={time.description}
        />
      ))}
    </div>
  )
}
