import TimeLineCard from '../components/TimeLineCard/timeLineCard'
import Airtable from 'airtable'

export const revalidate = 60

export default async function SoftwareArticles() {
    const softwareArticles = []
    let result = []

    // Airtable data fetcher
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE);
    const records = await base('softwareArticles').select({ view: "Grid view" }).all();
    records.forEach(function (record) {
        softwareArticles.push({
            date: record.get('date'),
            text: record.get('text'),
            link: record.get('link')
        })
    });

    const reduced = softwareArticles.reduce((acc, curr) => {
        if (!acc[curr.date]) {
            acc[curr.date] = { date: curr.date, link: curr.link, texts: [] };
        }
        acc[curr.date].texts.push(curr.text);
        return acc;
    }, {});

    result = Object.values(reduced).reverse();

    return (<div className="bordered">
        <h1>Yazılımla ilgili bazı makalelerim</h1>
        {result.map((time) => <TimeLineCard key={time.texts} texts={time.texts} date={time.date} link={time.link} />)}
    </div>)
}
