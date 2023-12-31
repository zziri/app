import { isEmpty, range, shuffle, slice } from "lodash-es";
import { ChangeEvent, useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  font-size: 1rem;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
`;

const Result = styled.div`
  padding: 1rem;
  span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const StyledInput = styled.input`
  max-width: 3.5rem;
  height: 1rem;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const StyledButton = styled.div`
  display: inline-flex;
  color: black;
  padding: 0.6rem 1rem;
  text-align: center;
  font-weight: bold;
  border-radius: 0.75rem;
  border: 1px solid #ccc;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:active {
    border-color: #888; // even darker border on active/click
  }
`;

export default function RandomExtractorFunction() {
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(45);
  const [count, setCount] = useState<number>(6);
  const [list, setList] = useState<Array<number>>([]);

  function onChangeStart(e: ChangeEvent<HTMLInputElement>) {
    setStart(Number(e.target.value));
  }

  function onChangeEnd(e: ChangeEvent<HTMLInputElement>) {
    setEnd(Number(e.target.value));
  }

  function onClickExtract(e: any) {
    e.preventDefault();

    const rangeList = range(start, end + 1);
    const shuffled = shuffle(rangeList);
    const sliced = slice(shuffled, 0, count);
    setList(sliced);
  }

  function onChangeCount(e: any) {
    setCount(e.target.value);
  }

  return (
    <Container>
      <InputRow>
        <span>숫자 범위: </span>
        <StyledInput type="number" onChange={onChangeStart} value={start} />
        <span> ~ </span>
        <StyledInput type="number" onChange={onChangeEnd} value={end} />
      </InputRow>
      <InputRow>
          <span>개수:</span>
          <StyledInput type="number" value={count} onChange={onChangeCount}/>
          <StyledButton onClick={onClickExtract}>뽑기</StyledButton>
      </InputRow>
      <Result>
        <span>
          {!isEmpty(list) && list.map((value, index) => {
            const suffix = (list.length - 1 === index) ? '' : ', ';
            return `${value}${suffix}`;
          })}
        </span>
      </Result>
    </Container>
  );
}
