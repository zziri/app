import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import HeightBody from "./_components/HeightBody";
import { heightArticleList } from "@/data/articleList";

const title = '자녀 예상 키 계산기';
const description = `
자녀 키의 예상 값을 계산할 수 있는 페이지입니다.
부모님의 키를 입력하면 자녀의 예상 키를 계산합니다.
모든 키 데이터의 단위는 cm 이며 예상 키의 오차 범위는 5cm 이내입니다.
`;

const Height = () => {
  return (
    <>
      <SeoHead
        title={title}
        description={description} />
      <Title title={title} />
      <Description content={description} />
      <HeightBody />
      <SeoArticle list={heightArticleList} />
    </>
  );
}

export default Height;
