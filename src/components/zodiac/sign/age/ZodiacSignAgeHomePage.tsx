import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import ZodiacSignAgeHomeFunction from "@/components/zodiac/sign/age/ZodiacSignAgeHomeFunction";
import { currentYear } from "@/data/common/commonData";
import { toString } from "lodash-es";

interface Props {
  year: string;
}

export default function ZodiacSignAgeHomePage( { year }: Props) {
  const title = toString(currentYear) === year ? '올해 띠별 나이' :`${year}년도 띠별 나이`;
  const description = `${year}년도 띠별 나이를 확인하세요. 띠별 나이 버튼을 클릭하면 해당 띠의 나이 테이블로 이동합니다.`;

  return (
    <>
      <SeoHead title={title} description={description} />
      <Title title={title} />
      <Description content={description} />
      <ZodiacSignAgeHomeFunction year={Number(year)}/>
      <SeoArticle list={[]}/>
    </>
  );
}
