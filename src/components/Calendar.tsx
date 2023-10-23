import { getMonth, getYear } from "date-fns";
import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import DatePicker from 'react-datepicker';
import { range } from 'lodash-es';

export default function Calendar() {
  const now = new Date();
  const [startDate, setStartDate] = useState<Date>(now);
  const years = range(1990, getYear(now) + 1, 1);
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  return (
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
      selected={startDate}
      dateFormat={"yyyy-MM-dd"}
      locale={ko}
      onChange={(date: Date) => setStartDate(date)}
      minDate={now}
    />
  );
}