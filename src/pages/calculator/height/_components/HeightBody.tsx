import { isNil } from "lodash-es";
import { useState } from "react";
import { styled } from "styled-components";
import HeightResult from "./HeightResult";
import EmptyDiv from "@/components/common/EmptyDiv";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding-left: 1.25rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 1rem;
  &::placeholder {
    font-weight: bold;
  }
`;

const HeightBody = () => {
  const [motherHeight, setMotherHeight] = useState(0);
  const [fatherHeight, setFatherHeight] = useState(0);

  const setted = !isNil(motherHeight) && !isNil(fatherHeight) && motherHeight !== 0 && fatherHeight !== 0;

  return (
    <>
      <Wrapper>
        {setted && <HeightResult motherHeight={motherHeight} fatherHeight={fatherHeight} />}
        {!setted && <EmptyDiv height="8rem" />}
        <Input
          placeholder="엄마 키"
          onChange={(e) => setMotherHeight(Number(e.target.value))}
          value={motherHeight === 0 ? '' : motherHeight} />
        <Input
          placeholder="아빠 키"
          onChange={(e) => setFatherHeight(Number(e.target.value))}
          value={fatherHeight === 0 ? '' : fatherHeight} />
      </Wrapper>
    </>
  );
}

export default HeightBody;