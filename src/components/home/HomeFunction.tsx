import { getYear } from "date-fns";
import { toString } from "lodash-es";
import Link from "next/link";

function getDefaultCsatYear() {
  const now = new Date();
  return toString(getYear(now) + 1);
}

export default function HomeFunction() {
  const defaultCsatYear = getDefaultCsatYear();
  return (
    <>
      <div>
        <ul className="list-group">
          <li><Link href={"/calculator/d-day"} legacyBehavior><a>디데이 계산기</a></Link></li>
          <li><Link href={`/calculator/d-day/csat/${defaultCsatYear}`} legacyBehavior><a>{defaultCsatYear}학년도 수능 디데이</a></Link></li>
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