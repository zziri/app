import DDayCalFunction from "@/components/dday/DDayCalFunction";
import Description from "@/components/common/Description";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import 'styled-jsx';
import SeoArticle from "@/components/common/SeoArticle";
import { dDayArticleList } from "@/data/ddayCalData";
import EmptyDiv from "@/components/common/EmptyDiv";

const description = `D-day를 간단하게 확인할 수 있는 디데이 계산기입니다.
디데이(D-day)는 특정 날짜가 기준 날짜(오늘)로부터 얼마나 남았는지, 남은 일수를 뜻합니다.
날짜를 선택하기만 하면 디데이를 계산합니다.`;

export default function DDayCal() {
  return (
    <>
      <SeoHead
        title='D-day 계산기'
        description={description} />
      <Title title="D-day 계산기"/>
      <Description content={description} />
      <DDayCalFunction />
      <EmptyDiv height={"5rem"} />
      <SeoArticle list={dDayArticleList}/>
    </>
  );
}
