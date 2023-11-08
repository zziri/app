import { zodiacSignKorean, zodiacSignList } from "@/data/zodiac/sign/zodiacSignData";
import { getYear } from "date-fns";
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

export default function ZodiacSignAgeHomeFunction() {
  const now = new Date();
  const year = getYear(now);

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
        <div>이전 년도 다음 년도 링크 영역</div>
      </div>

      <style jsx>{`
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
      `}</style>
    </>
  );
}