import { useRecoilState, useSetRecoilState } from "recoil";
import SeoHead from "../common/SeoHead";
import { diffDayTargetDateState } from "@/atoms";
import { useEffect } from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import CountDownDaysFunction from "./DdayFunction";
import EmptyDiv from "../common/EmptyDiv";
import SeoArticle from "../common/SeoArticle";
import dDayXmasArticleList from "@/data/d-day/xmas/article";

interface Props {
  year: number;
}

export default function XmasDdayPage( { year }: Props) {
  const setTargetDate = useSetRecoilState<Date>(diffDayTargetDateState);

  const title = `${year} 크리스마스 디데이`;
  const description = `${year}년도 크리스마스 디데이를 확인할 수 있는 페이지입니다.
  D-day는 특정 날짜가 오늘로부터 얼마나 남았는지를 나타내는, 즉 남은 일수를 뜻하는 용어입니다.`;

  useEffect(() => {
    setTargetDate(new Date(`${year}-12-25`));
  }, []);

  return (
    <>
      <SeoHead 
        title={title}
        description={description}
      />
      <Title title={title} />
      <Description content={description} />
      <CountDownDaysFunction readOnly={true}/>
      <EmptyDiv height={'10rem'} />
      <SeoArticle list={dDayXmasArticleList} />
    </>
  );
}
