import Padding from "@/components/common/Padding";
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

const CagrView = () => {
  const cagr = 10;

  return (
    <>
      <Frame>
        <Result>연평균 성장률은 <Span>{cagr}%</Span> 입니다</Result>
        <Padding left="5rem" right="5rem">
          <InputWithText text="일" />
        </Padding>
        <Padding left="5rem" right="5rem">
          <InputWithText text="년" />
        </Padding>
      </Frame>
    </>
  );
}

export default CagrView;
