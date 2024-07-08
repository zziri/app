import Padding from "@/components/common/Padding";
import { useState } from "react";
import { styled } from "styled-components";
import InputWithText from "./InputWithText";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.7rem;
  padding-top: 2rem;
`;

const Result = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const Span = styled.span`
  color: red;
`;

const getDay = ({ year, month }: { year: number, month: number }) => {
  return year * 365 + month * (365/12);
}

const getMonth = ({ day, year }: { day: number, year: number }) => {
  return day / 365 * 12 + year * 12;
}

const getYear = ({ day, month }: { day: number, month: number }) => {
  return day / 365 + month / 12;
}

const filterInputValue = (inputValue: string) => {
  // 숫자와 '.'을 제외한 나머지 문자 제거
  let filteredValue = inputValue.replace(/[^0-9.]/g, '');

  // '.'이 두 개 이상 있는 경우, 첫 번째 '.'을 제외하고 나머지 '.' 제거
  const firstDotIndex = filteredValue.indexOf('.');
  if (firstDotIndex !== -1) {
    filteredValue = filteredValue.substring(0, firstDotIndex + 1) + filteredValue.substring(firstDotIndex + 1).replace(/\./g, '');
  }

  return filteredValue;
}

const CagrView = () => {
  const [result, setResult] = useState(10);
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const onChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDay = filterInputValue(e.target.value);
    setDay(newDay);
    setMonth(getMonth({ day: Number(newDay), year: 0 }).toString());
    setYear(getYear({ day: Number(newDay), month: 0 }).toString());
  }

  const onChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonth = filterInputValue(e.target.value);
    setMonth(newMonth);
    setDay(getDay({ year: 0, month: Number(newMonth) }).toString());
    setYear(getYear({ day: 0, month: Number(newMonth) }).toString());
  }

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = filterInputValue(e.target.value);
    setYear(newYear);
    setDay(getDay({ year: Number(newYear), month: 0 }).toString());
    setMonth(getMonth({ day: 0, year: Number(newYear) }).toString());
  }

  return (
    <>
      <Frame>
        <Result>연평균 성장률은 <Span>{result}%</Span> 입니다</Result>
        <Padding left="5rem" right="5rem">
          <InputWithText value={day} handler={onChangeDay} text="일" />
        </Padding>
        <Padding left="5rem" right="5rem">
          <InputWithText value={month} handler={onChangeMonth} text="개월" />
        </Padding>
        <Padding left="5rem" right="5rem">
          <InputWithText value={year} handler={onChangeYear} text="년" />
        </Padding>
      </Frame>
    </>
  );
}

export default CagrView;
