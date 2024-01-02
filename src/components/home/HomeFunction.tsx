import { currentYear } from "@/data/common/commonData";
import { toString } from "lodash-es";
import Link from "next/link";
import styled from 'styled-components';

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 3rem;
  border-bottom: 0.1rem solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const AnchorLink = styled.a`
  color: black;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  padding: 1rem 1.5rem;
`;

function getDefaultCsatYear() {
  return toString(currentYear + 1);
}

interface AnchorProps {
  href: string;
  text: string;
}

function Anchor({ href, text }: AnchorProps) {
  return (
    <Link href={href} legacyBehavior>
      <AnchorLink>{text}</AnchorLink>
    </Link>
  );
}

export default function HomeFunction() {
  const defaultCsatYear = getDefaultCsatYear();

  return (
    <>
      <LinkItem>
        <Anchor href={'/calculator/d-day'} text='디데이 계산기' />
      </LinkItem>
      <LinkItem>
        <Anchor href={`/calculator/d-day/csat/${defaultCsatYear}`} text={`${defaultCsatYear}학년도 수능 디데이`} />
      </LinkItem>
      <LinkItem>
        <Anchor href={'/extractor/random'} text={'랜덤 숫자 뽑기'} />
      </LinkItem>
      <LinkItem>
        <Anchor href={'/extractor/password'} text={'랜덤 비밀번호 생성기'} />
      </LinkItem>
      <LinkItem>
        <Anchor href={'/zodiac/sign/age/home'} text={'올해 띠별 나이'} />
      </LinkItem>
    </>
  );
}
