export default function TimeLineCard({ texts, date, link }) {
    return (
        <div className="time-line-card">
            <span className="time-line-card-date">{date}</span>
            {texts.map((t) => {
                return <p key={t} className="time-line-card-text">{t}</p>
            })}

            <div className="time-line-footer">
                {link &&
                    <a href={link} target="_blank">↗↗↗</a>
                }
            </div>
        </div>
    )
}