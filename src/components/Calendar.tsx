import { getMonth, getYear } from "date-fns";
import { useEffect } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import DatePicker from 'react-datepicker';
import { range } from 'lodash-es';
import { useRecoilState } from "recoil";
import { diffDayTargetDateState } from "@/atoms";

export default function Calendar() {
  const now = new Date();
  const [targetDate, setTargetDate] = useRecoilState<Date>(diffDayTargetDateState);
  const years = range(getYear(now), getYear(now) + 50, 1);
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  useEffect(() => {
    setTargetDate(now);
  }, []);

  return (
    <>
      <div>
        <span>기준 날짜를 선택해주세요</span>
        <div>
          <DatePicker
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled
            }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                  {"<"}
                </button>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(Number(value))}
                >
                  {years.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                  {">"}
                </button>
              </div>
            )}
            selected={targetDate}
            dateFormat={"yyyy-MM-dd"}
            locale={ko}
            onChange={(date: Date) => setTargetDate
              (date)}
            minDate={now}
            popperPlacement="top-start"
            customInput={<input />}
          />
        </div>
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
        div div {
          display: flex;
          flex-direction: row;
        }
        input {
          height: 2rem;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}