import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import CagrView from "./_components/CagrView";
import { cagrArticleList } from "@/data/cagr";

const title = 'CAGR 계산기';
const description = `CAGR(Compound Annual Growth Rate)는 연평균 성장률을 뜻합니다.
투자 수익률을 계산할 때 사용되는 지표로, 투자 수익률을 측정하는 방법 중 하나입니다.
CAGR 계산기를 통해 투자 수익률을 쉽게 계산해보세요.`;

const CagrPage = () => {

  return (
    <>
      <SeoHead
        title={title}
        description={description} />
      <Title title={title} />
      <Description content={description}/>
      <CagrView />
      <EmptyDiv height={'5rem'}/>
      <SeoArticle list={cagrArticleList}/>
    </>
  );
}

export default CagrPage;
