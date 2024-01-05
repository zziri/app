import { currentYear } from "@/data/common/commonData";
import { toString } from "lodash-es";
import Link from "next/link";

function getDefaultCsatYear() {
  return toString(currentYear + 1);
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
          text-decoration: none;
          text-align: center;
          display: inline-block;
          padding: 1rem 1.5rem;
        }
      `}</style>
    </>
  );
}

export default function HomeFunction() {
  const defaultCsatYear = getDefaultCsatYear();
  return (
    <>
      <div className="home">
        <div className="link-item">
          <Anchor href={'/calculator/d-day'} text='디데이 계산기' />
        </div>
        <div className="link-item">
            <Anchor href={`/calculator/d-day/csat/${defaultCsatYear}`} text={`${defaultCsatYear}학년도 수능 디데이`} />
        </div>
        <div className="link-item">
            <Anchor href={'/extractor/random'} text={'랜덤 숫자 뽑기'} />
        </div>
        <div className="link-item">
            <Anchor href={'/extractor/password'} text={'랜덤 비밀번호 생성기'} />
        </div>
        <div className="link-item">
            <Anchor href={'/zodiac/sign/age/home'} text={'올해 띠별 나이'} />
        </div>
        <div className="link-item">
            <Anchor href={'/calculator/height'} text={'자녀 예상 키 계산기'} />
        </div>
      </div>

      <style jsx>{`
        div {
          {/* border: solid; */}
        }
        .link-item {
          display: flex;
          align-items: center;
          min-height: 3rem;
          border-bottom: 0.1rem solid #ccc;
        }
        .link-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </>
  );
}