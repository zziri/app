import { diffDayTargetDateState } from "@/atoms";
import { dDayCsatArticleList, scheduleMap } from "@/data/d-day/csat";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import SeoHead from "../common/SeoHead";
import Title from "../common/Title";
import Description from "../common/Description";
import CountDownDaysFunction from "./DdayFunction";
import EmptyDiv from "../common/EmptyDiv";
import SeoArticle from "../common/SeoArticle";

interface Props {
  year: string;
}

export default function DdayCsat({ year }: Props) {
  const [targetDate, setTargetDate] = useRecoilState<Date>(diffDayTargetDateState);

  const description = `${year}학년도 수능 디데이를 확인할 수 있는 페이지입니다.
  D-day는 특정 날짜가 오늘로부터 얼마나 남았는지를 나타내는, 즉 남은 일수를 뜻하는 용어입니다.
  열심히 준비한 만큼 원하는 결과를 얻으시길 바랍니다.`;

  useEffect(() => {
    const newTargetDate = scheduleMap.get(year) || targetDate;
    setTargetDate(newTargetDate);
  }, []);

  return (
    <>
      <SeoHead 
        title={`${year} 수능 디데이`}
        description={description}
      />
      <Title title={`${year} 수능 디데이`} />
      <Description content={description} />
      <CountDownDaysFunction readOnly={true}/>
      <EmptyDiv height={'10rem'} />
      <SeoArticle list={dDayCsatArticleList} />
    </>
  );
}