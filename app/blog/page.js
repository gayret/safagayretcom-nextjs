import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import { fetchAirtableTable } from '../lib/airtable'

export const revalidate = 3600

export default async function Blog() {
  const data = await fetchAirtableTable('softwareArticles')

  return (
    <div className='bordered'>
      <p>Yazılımla ilgili bazı yazılarım</p>
      {data.map((time) => (
        <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />
      ))}
    </div>
  )
}
