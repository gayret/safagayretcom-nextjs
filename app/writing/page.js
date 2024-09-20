import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import timeLogs from './data.json'

const getReversedTimeLogs = timeLogs.reverse()

export default function Writing() {
    return (<div className="bordered">
        <h1>Yazı, Kitap</h1>
        {getReversedTimeLogs.map((time) => <TimeLineCard key={time.date} texts={time.texts} date={time.date} link={time.link} />)}
    </div>)
}