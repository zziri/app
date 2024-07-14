import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import CagrView from "./_components/CagrView";
import { cagrArticleList } from "@/data/cagr";

const title = 'CAGR 계산기';
const description = `CAGR 계산기를 통해 연평균 성장률을 쉽게 계산해보세요. 시작값과 최종값, 투자 기간을 입력하면 CAGR을 계산합니다.
투자 기간은 일, 월, 년 단위 중 아무거나 입력하면 됩니다.`;

const CagrPage = () => {

  return (
    <>
      <SeoHead
        title={title}
        description={description} />
      <Title title={title} />
      <Description content={description}/>
      <CagrView />
      <EmptyDiv height={'4rem'}/>
      <SeoArticle list={cagrArticleList}/>
    </>
  );
}

export default CagrPage;
