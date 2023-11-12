import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";

export default function HeightCalculatorPage() {
  const title = '자녀 예상 키 계산기';
  const description = '자녀 예상 키 계산기입니다.'
  return (
    <>
      <SeoHead title={title} description={description} />
      <Title title={title} />
      <Description content={description} />
      {/* <HeightCalculatorFunction /> */}
      <SeoArticle list={[]}/>
    </>
  );
}

