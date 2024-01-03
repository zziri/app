import { serviceYearList, zodiacSignKorean, zodiacSignList } from "@/data/zodiac/sign/zodiacSignData";
import styled from 'styled-components';
import ButtonList from "./ButtonList";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface Props {
  year: number;
}

export default function ZodiacSignAgeHomeFunction({ year }: Props) {
  const router = useRouter();
  const items = zodiacSignList.map(sign => {
    const signKorean = zodiacSignKorean.get(sign);
    return {
      text: `${signKorean}띠 나이`,
      onClick: () => router.push(`/zodiac/sign/age/${sign}/${year}`)
    }
  });

  const otherItems = serviceYearList.filter(y => y !== year).map(y => {
    return {
      text: `${y}년 띠별 나이`,
      onClick: () => router.push(`/zodiac/sign/age/home/${y}`)
    }
  })

  return (
    <Wrapper>
      <ButtonList items={items} />
      <ButtonList items={otherItems} direction="row" />
    </Wrapper>
  );
}
