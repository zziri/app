import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import ChatCalculator from "./_components/ChatCalculator";

const title = '아파트 매수 가능 가격 계산기';
const description = `아파트 매수 가능 가격을 계산해보세요. 소득과 자본금을 입력하면 DSR, LTV 기준으로 매수할 수 있는 최대 아파트 가격을 알려드립니다. 대화형 챗봇을 통해 쉽고 빠르게 계산할 수 있습니다.`;

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
