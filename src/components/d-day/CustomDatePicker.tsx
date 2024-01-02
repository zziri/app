import { getMonth, getYear } from 'date-fns';
import { ko } from 'date-fns/locale';
import { range } from 'lodash-es';
import DatePicker from 'react-datepicker';
import { SetterOrUpdater } from 'recoil';
import styled from 'styled-components';

interface CustomDatePickerProps {
  minDate: Date,
  date: Date,
  setDate: SetterOrUpdater<Date>,
}

const Input = styled.input`
  height: 2rem;
  font-size: 1rem;
  border-radius: 0.75rem;
  border-width: 0.1rem;
  padding-left: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function CustomDatePicker({ minDate, date, setDate }: CustomDatePickerProps) {
  const years = range(getYear(minDate), getYear(minDate) + 50, 1);
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  return (
    <>
      <Wrapper>
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
            <Wrapper
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
            </Wrapper>
          )}
          selected={date}
          dateFormat={"yyyy-MM-dd"}
          locale={ko}
          onChange={(date: Date) => setDate
            (date)}
          minDate={minDate}
          popperPlacement="top-start"
          customInput={<Input />}
        />
      </Wrapper>
    </>
  );
}