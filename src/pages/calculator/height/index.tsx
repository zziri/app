import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import styled from "styled-components";
import HeightResult from "./_components/HeightResult";
import { useState } from "react";
import { isNil } from "lodash-es";
import EmptyDiv from "@/components/common/EmptyDiv";

const title = '자녀 예상 키 계산기';
const description = `
자녀의 키의 예상 값을 계산할 수 있는 페이지입니다.
엄마 키와 아빠 키를 입력하면 아들과 딸의 예상 키를 계산합니다.
모든 키 데이터의 단위는 cm 이며 오차 범위는 5cm 이내입니다.
`;

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

const Height = () => {
  return (
    <>
      <SeoHead
        title={title}
        description={description} />
      <Title title={title} />
      <Description content={description} />
      <HeightBody />
      <SeoArticle list={[]} />
    </>
  );
}

export default Height;
