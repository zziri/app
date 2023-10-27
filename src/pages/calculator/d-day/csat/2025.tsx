import { diffDayTargetDateState } from "@/atoms";
import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import CountDownDaysFunction from "@/components/d-day/CountDownDaysFunction";
import { dDayCsatArticleList, scheduleMap } from "@/data/d-day/csat";
import { getYear } from "date-fns";
import { toString } from "lodash-es";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const description = `수능 디데이를 확인할 수 있는 페이지입니다.
D-day는 특정 날짜가 오늘로부터 얼마나 남았는지를 나타내는, 즉 남은 일수를 뜻하는 용어입니다.
열심히 준비한 만큼 원하는 진학을 이루시길 바랍니다.`;

const now = new Date();
const defaultYear = (getYear(now) + 1).toString();

function validYear(year: string) {
  return scheduleMap.has(year);
}

export default function CountDownDaysCSAT() {
  const router = useRouter();
  // const year = toString(router.query.year) || defaultYear;
  const year = '2025';
  const [targetDate, setTargetDate] = useRecoilState<Date>(diffDayTargetDateState);

  useEffect(() => {
    // if (!validYear(year)) {
    //   router.push(router.pathname.replace('[year]', defaultYear));
    // }
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
