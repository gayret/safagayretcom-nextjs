import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import projectsJSON from '../data/projects.json'

export default async function Projects() {
  return (
    <div className='bordered'>
      <h1>Bazı Projelerim</h1>

      {projectsJSON.map((time) => (
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
