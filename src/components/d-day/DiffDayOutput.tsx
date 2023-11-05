import { diffDayTargetDateState } from "@/atoms";
import { differenceInDays, format, set } from "date-fns";
import { useRecoilValue } from "recoil";

/**
   * 디데이 기준이므로 양일때 '-', 음일때 '+' 반대
   */
function getSign(value: number) {
  return value >= 0 ? '-' : '+';
}

function getColor(value: number) {
  return value >= 0 ? 'red' : 'blue';
}

export default function DiffDayOutput() {
  const diffDayTargetDate = useRecoilValue<Date>(diffDayTargetDateState);

  const timeValue = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }

  const target = set(diffDayTargetDate, timeValue);
  const now = set(new Date(), timeValue);

  const dayDiff = differenceInDays(target, now);

  return (
    <>
      <div className="d-day-output-container">
        <div className={`d-day-result bold ${getColor(dayDiff)}`}>
          <span>D{getSign(dayDiff)}{Math.abs(dayDiff)}</span>
        </div>
        <div className="d-day-base">
          <span>기준 날짜는 <strong>{format(now, 'yyyy년 MM월 dd일')}</strong> 입니다</span>
        </div>
        <div className="d-day-event">
          <span>이벤트 날짜는 <strong>{format(diffDayTargetDate, 'yyyy년 MM월 dd일')}</strong> 입니다</span>
        </div>
      </div>

      <style jsx>{`
        .d-day-output-container > div {
          text-align: center;
          padding: 0.5rem;
        }
        .d-day-result {
          font-size: 3rem;
        }
        .d-day-base {
          font-size: 1.2rem;
        }
        .d-day-event {
          font-size: 1.2rem;
        }
        .bold {
          font-weight: bold;
        }
        .red {
          color: red;
        }
        .blue {
          color: blue;
        }
      `}</style>
    </>
  );
}