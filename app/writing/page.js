import TimeLineCard from "../components/TimeLineCard/timeLineCard"
import timeLogs from './data.json'

const getReversedTimeLogs = timeLogs.reverse()

export default function Code() {
    return (<div className="bordered">
        <h1>Yazı, Kitap</h1>
        {
            getReversedTimeLogs.map((time) => {
                return (
                    <>
                        <TimeLineCard texts={time.texts} date={time.date} link={time.link} />
                    </>
                )
            })
        }
    </div>)
}