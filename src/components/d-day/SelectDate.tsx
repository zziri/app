import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from "recoil";
import { diffDayTargetDateState } from "@/atoms";
import CustomDatePicker from "./CustomDatePicker";

export default function SelectDate() {
  const minDate = new Date('1990-01-01');
  const [targetDate, setTargetDate] = useRecoilState<Date>(diffDayTargetDateState);

  return (
    <>
      <div>
        <span>날짜를 선택해주세요</span>
        <CustomDatePicker minDate={minDate} date={targetDate} setDate={setTargetDate} />
      </div>

      <style jsx>{`
        div {
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        div span {
          font-weight: bold;
          color: blue;
          padding-bottom: 0.75rem;
        }
      `}</style>
    </>
  );
}