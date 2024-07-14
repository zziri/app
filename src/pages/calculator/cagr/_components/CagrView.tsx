import Padding from "@/components/common/Padding";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import InputWithText from "./InputWithText";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.7rem;
  padding-top: 1rem;
`;

const Result = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const Span = styled.span`
  color: red;
`;

const getDay = ({ year = 0, month = 0 }: { year?: number, month?: number }) => {
  return year * 365 + month * (365 / 12);
}

const getYear = ({ day = 0, month = 0 }: { day?: number, month?: number }) => {
  return day / 365 + month / 12;
}

const getMonth = ({ day = 0, year = 0 }: { day?: number, year?: number }) => {
  return day / 365 * 12 + year * 12;
}

const getFiltered = (value: string) => {
  // 숫자와 '.'을 제외한 나머지 문자 제거
  let ret = value.replace(/[^0-9.]/g, '');

  // '.'이 두 개 이상 있는 경우, 첫 번째 '.'을 제외하고 나머지 '.' 제거
  const indexOfDot = ret.indexOf('.');
  if (indexOfDot !== -1) {
    ret = ret.substring(0, indexOfDot + 1) + ret.substring(indexOfDot + 1).replace(/\./g, '');
  }

  return ret;
}

const CagrView = () => {
  const [cagr, setCagr] = useState(0);
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');

  useEffect(() => {
    const startValue = parseFloat(start);
    const endValue = parseFloat(end);
    const years = parseFloat(year);

    if (startValue > 0 && endValue > 0 && years > 0) {
      const cagr = ((endValue / startValue) ** (1 / years) - 1) * 100;
      setCagr(cagr);
    } else {
      setCagr(0); // 유효하지 않은 입력값에 대해 결과를 0으로 설정
    }
  }, [start, end, year])

  const onChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDay = getFiltered(e.target.value);
    setDay(newDay);
    setMonth(getMonth({ day: Number(newDay) }).toString());
    const newYearValue = getYear({ day: Number(newDay) });
    setYear(newYearValue.toString());
  }

  const onChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonth = getFiltered(e.target.value);
    setMonth(newMonth);
    setDay(getDay({ month: Number(newMonth) }).toString());
    setYear(getYear({ month: Number(newMonth) }).toString());
  }

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = getFiltered(e.target.value);
    setYear(newYear);
    setDay(getDay({ year: Number(newYear) }).toString());
    setMonth(getMonth({ year: Number(newYear) }).toString());
  }

  const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStart = getFiltered(e.target.value);
    setStart(newStart);
  }

  const onChangeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEnd = getFiltered(e.target.value);
    setEnd(newEnd);
  }

  const paddingSize = '3rem';

  return (
    <>
      <Frame>
        <Result>연평균 성장률은 <Span>{cagr?.toFixed(2)}%</Span> 입니다</Result>
        <Padding left={paddingSize} right={paddingSize}>
          <InputWithText value={start} handler={onChangeStart} text="시작값" />
        </Padding>
        <Padding left={paddingSize} right={paddingSize}>
          <InputWithText value={end} handler={onChangeEnd} text="최종값" />
        </Padding>
        <Padding left={paddingSize} right={paddingSize}>
          <InputWithText value={year} handler={onChangeYear} text="기간(년)" />
        </Padding>
        <Padding left={paddingSize} right={paddingSize}>
          <InputWithText value={month} handler={onChangeMonth} text="기간(개월)" />
        </Padding>
        <Padding left={paddingSize} right={paddingSize}>
          <InputWithText value={day} handler={onChangeDay} text="기간(일)" />
        </Padding>
      </Frame>
    </>
  );
}

export default CagrView;
