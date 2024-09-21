import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import Airtable from 'airtable'

export const revalidate = 3600

const movie = []
let result = []

// Airtable data fetcher
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE);
base('movie').select({ view: "Grid view" }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
        movie.push({
            date: record.get('date'),
            text: record.get('text'),
            link: record.get('link')
        })
    });

    const reduced = movie.reduce((acc, curr) => {
        if (!acc[curr.date]) {
            acc[curr.date] = { date: curr.date, link: curr.link, texts: [] };
        }
        acc[curr.date].texts.push(curr.text);
        return acc;
    }, {});

    result = Object.values(reduced).reverse();

    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
})

export default function Movie() {
    return (<div className="bordered">
        <h1>Film</h1>
        {result.map((time) => <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />)}
    </div>)
}