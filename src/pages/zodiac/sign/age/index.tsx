import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import ZodiacSignAgeHomeFunction from "@/components/zodiac/sign/age/ZodiacSignAgeHomeFunction";

export default function ZodiacSignAgeHomePage() {
  const title = '올해 띠별 나이';
  const description = '2023년도 띠별 나이를 확인하세요.';

  return (
    <>
      <SeoHead title={title} description={description} />
      <Title title={title} />
      <Description content={description} />
      <ZodiacSignAgeHomeFunction />
      <SeoArticle list={[]}/>
    </>
  );
}
