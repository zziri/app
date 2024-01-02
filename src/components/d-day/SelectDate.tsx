import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from "recoil";
import { diffDayTargetDateState } from "@/atoms";
import CustomDatePicker from "./CustomDatePicker";
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSpan = styled.span`
  font-weight: bold;
  color: blue;
  padding-bottom: 0.75rem;
`;

export default function SelectDate() {
  const minDate = new Date('1990-01-01');
  const [targetDate, setTargetDate] = useRecoilState<Date>(diffDayTargetDateState);

  return (
    <Wrapper>
      <StyledSpan>날짜를 선택해주세요</StyledSpan>
      <CustomDatePicker minDate={minDate} date={targetDate} setDate={setTargetDate} />
    </Wrapper>
  );
}
