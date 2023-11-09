import { serviceYearList, zodiacSignKorean, zodiacSignList } from "@/data/zodiac/sign/zodiacSignData";
import Link from "next/link";

interface BasicLinkProps {
  href: string;
  text: string;
}

function BasicLink({ href, text }: BasicLinkProps) {
  return (
    <>
      <div className="link-container">
        <Link href={href} legacyBehavior>
          <a className="btn btn-outline-dark link-item">{text}</a>
        </Link>
      </div>

      <style jsx>{`
        .link-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .link-item {
          flex: 1;
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
}

interface Props {
  year: number;
}

export default function ZodiacSignAgeHomeFunction({ year }: Props) {
  return (
    <>
      <div className="root">
        <div className="link-group">
          {zodiacSignList.map(sign => {
            const signKorean = zodiacSignKorean.get(sign);
            return (
              <BasicLink
                key={`${sign}_${year}`}
                href={`/zodiac/sign/age/${sign}/${year}`}
                text={`${signKorean}띠 나이`} />
            );
          })}
        </div>
        <div className="other-year-container">
          {serviceYearList
            .filter(y => y !== year)
            .map(y => {
              const href = `/zodiac/sign/age/home/${y}`;
              return <BasicLink href={href} text={`${y}년 띠별 나이`} key={href} />
            })}
        </div>
      </div>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .other-year-container {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
        }
      `}</style>
    </>
  );
}