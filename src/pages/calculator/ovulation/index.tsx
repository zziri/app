import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import { ovulationArticleList } from "@/data/ovulation";
import Body from "./_components/Body";

const title = '배란일 계산기';
const description = `
다음 생리 예정일을 통해 배란이 언제 되는지 계산할 수 있는 페이지입니다.
`;

const Height = () => {
  return (
    <>
      <SeoHead
        title={title}
        description={description} />
      <Title title={title} />
      <Description content={description} />
      <Body />
      <SeoArticle list={ovulationArticleList} />
    </>
  );
}

export default Height;
