import { getMonth, getYear } from 'date-fns';
import { ko } from 'date-fns/locale';
import { range } from 'lodash-es';
import DatePicker from 'react-datepicker';
import { SetterOrUpdater } from 'recoil';

interface CustomDatePickerProps {
  minDate: Date,
  date: Date,
  setDate: SetterOrUpdater<Date>
}

export default function CustomDatePicker({ minDate, date, setDate }: CustomDatePickerProps) {
  const years = range(getYear(date), getYear(date) + 50, 1);
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  return (
    <>
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
          selected={date}
          dateFormat={"yyyy-MM-dd"}
          locale={ko}
          onChange={(date: Date) => setDate
            (date)}
          minDate={minDate}
          popperPlacement="top-start"
          customInput={<input />}
        />
      </div>
      <style jsx>{`
        input {
          height: 2rem;
          font-size: 1rem;
          border-radius: 0.75rem;
          border-width: 0.1rem;
          padding-left: 1rem;
        }
        div {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </>
  );
}