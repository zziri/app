import BasicInput from "@/components/common/BasicInput";
import EmptyDiv from "@/components/common/EmptyDiv";
import styled from "styled-components";
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { format } from "date-fns";

const ResultContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  /* border: 1px solid black; */
`;

const Header = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Result = styled.text`
  font-size: 1.2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

const Label = styled.label`
  font-size: 1.1rem;
`;

const Input = styled(BasicInput)`
  max-width: 9rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  font-size: 1rem;
`;

const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Backspace' || e.key === 'Delete') {
    console.log('Backspace or Delete key pressed');
  }
};

const Body = () => {
  const flag = true;
  const [date, setDate] = useState<Date>(new Date());
  const [value, setValue] = useState<string>(format(date, 'yyyy-MM-dd'));

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
      setDate(new Date(newValue));
    }
  }

  return (
    <>
      <ResultContents>
        {flag &&
          <ResultContent>
            <Header>배란예정일</Header>
            <Result>2024.03.15</Result>
          </ResultContent>}
        {!flag &&
          <EmptyDiv height='4rem' />}
      </ResultContents>
      <InputWrapper>
        <Label>다음 생리 예정일</Label>
        <Input value={value} onChange={changeDate} onKeyDown={handleKeyDown}/>
      </InputWrapper>
    </>
  );
}

export default Body;
