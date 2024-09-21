import TimeLineCard from "../components/TimeLineCard/timeLineCard";
import { fetchAirtableTable } from "../lib/airtable";

export const revalidate = 3600;

export default async function SoftwareArticles() {
  const data = await fetchAirtableTable("writing");

  return (
    <div className="bordered">
      <h1>Yazı, kitap</h1>

      {data.map((time) => (
        <TimeLineCard
          key={time.texts}
          texts={time.texts}
          date={time.date}
          link={time.link}
        />
      ))}
    </div>
  );
}
