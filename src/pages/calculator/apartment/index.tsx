import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import ChatCalculator from "./_components/ChatCalculator";

const title = '아파트 가격 알아보기';
const description = `내가 매수할 수 있는 아파트 가격을 계산해보세요. 대출 기간, 대출 금리, 월 상환액을 입력하면 대출 가능한 최대 한도와 그에 맞는 아파트 가격을 알려드립니다. 대화형 챗봇을 통해 쉽고 빠르게 계산할 수 있습니다.`;

const ApartmentCalculatorPage = () => {
  return (
    <>
      <SeoHead
        title={title}
        description={description} />
      <Title title={title} />
      <Description content={description}/>
      <ChatCalculator />
      <EmptyDiv height={'4rem'}/>
    </>
  );
}

export default ApartmentCalculatorPage;
