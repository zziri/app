import { diffDayTargetDateState } from "@/atoms";
import { differenceInDays, format, set } from "date-fns";
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
    <ul className="list-group">
        <li>
          <span>오늘 날짜</span>
          <span>{format(now, 'yyyy년 MM월 dd일')}</span>
        </li>
        <li>
          <span>선택한 날짜</span>
          <span>{format(diffDayTargetDate, 'yyyy년 MM월 dd일')}</span>
        </li>
        <li>
          <span>남은 일수</span>
          <span className="bold">D-{dayDiff}</span>
        </li>
      </ul>

      <style jsx>{`
        .list-group {
          list-style: none;
          padding-top: 1rem;
          padding-bottom: 1rem;
          margin: 0;
          padding-inline-start: 0;
        }
        .list-group li {
          padding: 0.5rem;
          height: 1.5rem;
          border-top: 0.1rem solid #ccc;
          border-left: 0.1rem solid #ccc;
          border-right: 0.1rem solid #ccc;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        a {
          color: black;
          padding: 1rem 1.5rem;
          text-decoration: none;
          text-align: center;
          display: inline-block;
        }
        li:first-child {
          border-top: 0.1rem solid #ccc;
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        }
        li:last-child {
          border-top: 0.1rem solid #ccc;
          border-bottom: 0.1rem solid #ccc;
          border-bottom-left-radius: 0.25rem;
          border-bottom-right-radius: 0.25rem;
        }
        .bold {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}