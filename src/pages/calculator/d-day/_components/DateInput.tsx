import { diffDayTargetDateState } from "@/atoms";
import { format } from "date-fns";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const Text = styled.p`
  font-weight: bold;
  color: blue;
  text-align: center;
`;

const Input = styled.input`
  font-size: 1.2rem;
  border-radius: 1.5rem;
  border-width: 0.1rem;
  /* padding-left: 1rem; */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
`;

const DateInput = () => {
  const [targetDate, setTargetDate] = useRecoilState<Date>(diffDayTargetDateState);
  const [value, setValue] = useState<string>(format(targetDate, 'yyyy-MM-dd'));

  useEffect(() => {
    setValue(format(targetDate, 'yyyy-MM-dd'));
  }, [targetDate]);

  const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(/\D/g, '');
    if (newValue.length > 4) {
      newValue = newValue.substring(0, 4) + '-' + newValue.substring(4);
    }
    if (newValue.length > 7) {
      newValue = newValue.substring(0, 7) + '-' + newValue.substring(7);
    }
    newValue = newValue.slice(0, 10);
    setValue(newValue);
    if (newValue.length === 10) {
      setTargetDate(new Date(newValue));
    }
  }

  return (
    <Wrapper>
      <Text>날짜를 입력해주세요</Text>
      <Input onChange={changeDate} value={value} />
    </Wrapper>
  );
}

export default DateInput;