import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import RandomExtractorFunction from "@/components/extractor/random/RandomExtractorFunction";
import { randomArticleList } from "@/data/extractor/randomData";

export default function RandomExtractorPage() {
  const title = '랜덤 숫자 뽑기';
  const description = `입력된 숫자 범위 내에서 임의의 정수를 무작위 추출합니다. 뽑은 숫자끼리는 중복되지 않습니다.
  입력한 개수만큼 입력한 범위 내에서 랜덤으로 추출합니다. 여러 사람 중에 일부만 추첨해야 할 때 사용해 보세요.`;

  return (
    <>
      <SeoHead
        title={title}
        description={description} />
      <Title title={title}/>
      <Description content={description} />
      <RandomExtractorFunction />
      <SeoArticle list={randomArticleList}/>
    </>
  );
}
