import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import Airtable from 'airtable'

const writing = []
let result = []

// Airtable data fetcher
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE);
base('writing').select({ view: "Grid view" }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
        writing.push({
            date: record.get('date'),
            text: record.get('text'),
            link: record.get('link')
        })
    });

    const reduced = writing.reduce((acc, curr) => {
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

export default function Writing() {
    return (<div className="bordered">
        <h1>Yazı, Kitap</h1>
        {result.map((time) => <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />)}
    </div>)
}