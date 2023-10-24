import Article from "@/components/Article";
import DiffDayOutput from "@/components/DiffDayOutput";
import SelectDate from "@/components/SelectDate";
import SeoHead from "@/components/SeoHead";
import Title from "@/components/Title";
import 'styled-jsx';

const description = `D-day를 간단하게 계산할 수 있는 디데이 계산기입니다.
디데이(D-day)는 특정 날짜가 기준 날짜(오늘)로부터 얼마나 남았는지, 남은 일수를 뜻합니다.`;

export default function DDayCal() {
  return (
    <>
      <SeoHead
        title='D-day 계산기 | 디데이 계산기'
        description={description} />
      <Title title="D-day 계산기"/>
      <Article content={description}/>
      <div>
        <DiffDayOutput />
        <SelectDate />
      </div>
    </>
  );
}