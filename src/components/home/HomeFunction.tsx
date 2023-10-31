import { getYear } from "date-fns";
import { toString } from "lodash-es";
import Link from "next/link";

function getDefaultCsatYear() {
  const now = new Date();
  return toString(getYear(now) + 1);
}

interface AnchorProps {
  href: string;
  text: string;
}

function Anchor({ href, text }: AnchorProps) {
  return (
    <>
      <Link href={href} legacyBehavior>
        <a>{text}</a>
      </Link>

      <style jsx>{`
        a {
          color: black;
          padding: 1rem 1.5rem;
          text-decoration: none;
          text-align: center;
          display: inline-block;
        }
      `}</style>
    </>
  );
}

export default function HomeFunction() {
  const defaultCsatYear = getDefaultCsatYear();
  return (
    <>
      <div>
        <ul className="list-group">
          <li>
            <Anchor href={'/calculator/d-day'} text='디데이 계산기' />
          </li>
          <li>
            <Anchor href={`/calculator/d-day/csat/${defaultCsatYear}`} text={`${defaultCsatYear}학년도 수능 디데이`} />
          </li>
          <li>
            <Anchor href={'/extractor/random'} text={'랜덤 숫자 뽑기'} />
          </li>
          <li>
            <Anchor href={'/generator/password'} text={'랜덤 비밀번호 생성기'} />
          </li>
        </ul>
      </div>

      <style jsx>{`
        .list-group {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .list-group li {
          padding: 0.5rem;
          height: 2rem;
          border-bottom: 0.1rem solid #ccc;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .list-group li:last-child {
          border-bottom: none;
        }
      `}</style>
    </>
  );
}