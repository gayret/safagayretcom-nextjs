import Image from "next/image";
import linkSvg from "../../assets/img/link.svg";
import Link from "next/link";

export default function TimeLineCard({ texts, date, link, img }) {
  return (
    <div className="time-line-card">
      <span className="time-line-card-date">{date}</span>
      {img && (
        <Link href={link} target="_blank">
          <Image
            className="thumbnail"
            src={img[0].url}
            alt="image"
            width={400}
            height={0}
            style={{ width: "100%", height: "150px" }} // optional
          />
        </Link>
      )}

      {texts.map((t) => (
        <p key={t} className="time-line-card-text">
          {t}
        </p>
      ))}

      <div className="time-line-footer">
        {link && (
          <Link href={link} target="_blank">
            <Image src={linkSvg} alt="link" width={15} />
          </Link>
        )}
      </div>
    </div>
  );
}
