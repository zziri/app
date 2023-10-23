import { diffDayTargetDateState } from "@/atoms";
import { differenceInDays, getDay, getMonth, getYear, set, setHours } from "date-fns";
import { useRecoilValue } from "recoil";

export default function DiffDayOutput() {
  const diffDayTargetDate = useRecoilValue<Date>(diffDayTargetDateState);

  const setValues = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }

  const target = set(diffDayTargetDate, setValues);
  const now = set(new Date(), setValues);

  const dayDiff = differenceInDays(target, now);

  return (
    <>
      <div>
        <p>오늘은 {getYear(now)}년 {getMonth(now)}월 {getDay(now)}일이며 선택된 날짜로부터</p>
        <p className="bold">D-{dayDiff}</p>
        <p>일 입니다.</p>
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
        }
        .bold {
          font-weight: bold;
        }
        div > * {
          padding: 2px;
        }
      `}</style>
    </>
  );
}