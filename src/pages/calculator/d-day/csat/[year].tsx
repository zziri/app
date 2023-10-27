import { diffDayTargetDateState } from "@/atoms";
import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import CountDownDaysFunction from "@/components/d-day/CountDownDaysFunction";
import { scheduleMap } from "@/data/d-day/csat";
import { getYear } from "date-fns";
import { toString } from "lodash-es";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const description = `수능 디데이를 간단하게 확인할 수 있는 디데이 계산기입니다.
디데이(D-day)는 특정 날짜가 기준 날짜(오늘)로부터 얼마나 남았는지, 남은 일수를 뜻합니다.`;

const now = new Date();
const defaultYear = (getYear(now) + 1).toString();

function validYear(year: string) {
  return scheduleMap.has(year);
}

export default function CountDownDaysCSAT() {
  const router = useRouter();
  const year = toString(router.query.year) || defaultYear;
  const [targetDate, setTargetDate] = useRecoilState<Date>(diffDayTargetDateState);

  useEffect(() => {
    if (!validYear(year)) {
      router.push(router.pathname.replace('[year]', defaultYear));
    }
    const newTargetDate = scheduleMap.get(year) || targetDate;
    setTargetDate(newTargetDate);
  }, [year]);

  return (
    <>
      <SeoHead 
        title={`${year} 수능 디데이`}
        description={description}
      />
      <Title title={`${year} 수능 디데이`} />
      <Description content={description} />
      <CountDownDaysFunction readOnly={true}/>
      <EmptyDiv height={'5rem'} />
      <SeoArticle list={[]} />
    </>
  );
}
