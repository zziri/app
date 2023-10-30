import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import RandomExtractorFunction from "@/components/extractor/random/RandomExtractorFunction";
import { randomArticleList } from "@/data/extractor/randomData";

export default function RandomExtractorPage() {
  const title = '랜덤 숫자 뽑기';
  const description = `입력된 숫자 범위 내에서 겹치지 않는 숫자(정수)를 무작위 추출합니다.
  입력한 갯수만큼 입력한 범위 내에서 랜덤으로 추출합니다. 여러 사람 중에 일부만 추첨해야할 때 사용해보세요.`;

  return (
    <>
      <SeoHead
        title={title}
        description={description} />
      <Title title={title}/>
      <Description content={description} />
      <EmptyDiv height={"2rem"} />
      <RandomExtractorFunction />
      <SeoArticle list={randomArticleList}/>
    </>
  );
}