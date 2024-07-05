import BasicInput from "@/components/common/BasicInput";
import Padding from "@/components/common/Padding";
import { styled } from "styled-components";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding-top: 2rem;
`;

const Result = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const Input = styled(BasicInput)`
  width: 100%;
  text-align: left;
  padding-left: 1rem;
`;

const Span = styled.span`
  color: red;
`;

const CagrView = () => {
  return (
    <>
      <Frame>
        <Result>연평균 성장률은 <Span>10%</Span> 입니다</Result>
        <Padding left="1rem" right="1rem">
          <Input />
        </Padding>
        <Padding left="1rem" right="1rem">
          <Input />
        </Padding>
      </Frame>
    </>
  );
}

export default CagrView;
