import { serviceYearList, zodiacSignKorean, zodiacSignList } from "@/data/zodiac/sign/zodiacSignData";
import Link from "next/link";
import styled from 'styled-components';

const LinkWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const LinkItem = styled.a`
  flex: 1;
  font-size: 1.25rem;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const OtherYearContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

interface BasicLinkProps {
  href: string;
  text: string;
}

function BasicLink({ href, text }: BasicLinkProps) {
  return (
    <LinkWrapper>
      <Link href={href} legacyBehavior>
        <LinkItem>{text}</LinkItem>
      </Link>
    </LinkWrapper>
  );
}

interface Props {
  year: number;
}

export default function ZodiacSignAgeHomeFunction({ year }: Props) {
  return (
    <Root>
      <LinkGroup>
        {zodiacSignList.map(sign => {
          const signKorean = zodiacSignKorean.get(sign);
          return (
            <BasicLink
              key={`${sign}_${year}`}
              href={`/zodiac/sign/age/${sign}/${year}`}
              text={`${signKorean}띠 나이`} />
          );
        })}
      </LinkGroup>
      <OtherYearContainer>
        {serviceYearList
          .filter(y => y !== year)
          .map(y => {
            const href = `/zodiac/sign/age/home/${y}`;
            return <BasicLink href={href} text={`${y}년 띠별 나이`} key={href} />
          })}
      </OtherYearContainer>
    </Root>
  );
}
