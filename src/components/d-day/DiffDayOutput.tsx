import { diffDayTargetDateState } from "@/atoms";
import { differenceInDays, format, set } from "date-fns";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';

function getSign(value: number) {
  return value >= 0 ? '-' : '+';
}

function getColor(value: number) {
  return value >= 0 ? 'red' : 'blue';
}

const Wrapper = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

const Result = styled.div<{ color: string }>`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.color};
`;

const Base = styled.div`
  font-size: 1.2rem;
`;

const Event = styled.div`
  font-size: 1.2rem;
`;

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
    <Wrapper>
      <Result color={getColor(dayDiff)}>
        <span>D{getSign(dayDiff)}{Math.abs(dayDiff)}</span>
      </Result>
      <Base>
        <span>기준 날짜는 <strong>{format(now, 'yyyy년 MM월 dd일')}</strong> 입니다</span>
      </Base>
      <Event>
        <span>이벤트 날짜는 <strong>{format(diffDayTargetDate, 'yyyy년 MM월 dd일')}</strong> 입니다</span>
      </Event>
    </Wrapper>
  );
}
