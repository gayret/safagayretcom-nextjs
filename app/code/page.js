import TimeLineCard from "../components/TimeLineCard/timeLineCard"
import timeLogs from './data.json'

const getReversedTimeLogs = timeLogs.reverse()

export default function Code() {
    return (<div className="bordered">
        <h1>Kod</h1>
        {
            getReversedTimeLogs.map((time) => {
                return (
                    <>
                        <TimeLineCard texts={time.texts} date={time.date} link={time.link} />
                    </>
                )
            })
        }


        {/*
    
        <p>
            Üniversiteye başladığımda yarı zamanlı olarak yakınlarıma basit web siteler geliştirdim.
            Yazılımdan para kazanmaya böyle başladım.
        </p>
        <p>
            Profesyonel yazılım hayatıma Kahramanmaraş Sütçü İmam Üniversitesi, Teknokent Binasında yer
            alan Hey Teknoloji firmasında başladım.
        </p>
        <p>Bir buçuk yıl sonra Tekrom (TSoft) Teknoloji firmasına geçiş yaptım.</p>
        <p>Daha sonra bir yıl Turkish Technology firmasında çalıştım.</p>
        <p>
            Profesyonel hayatım boyunca Frontend teknolojileri üzerine yoğunlaştım. VueJS ve NuxtJS
            teknolojilerinde uzmanlaştım.
        </p> */}
    </div>)
}