import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import timeLogs from './data.json'

const getReversedTimeLogs = timeLogs.reverse()

export default function SoftrwareArticles() {
    return (<div className="bordered">
        <h1>Yazılımla ilgili bazı makalelerim</h1>
        {getReversedTimeLogs.map((time) => <TimeLineCard key={time.date} texts={time.texts} date={time.date} link={time.link} />)}
    </div>)
}