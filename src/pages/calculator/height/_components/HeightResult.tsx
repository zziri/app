import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Heading = styled.h3`
  font-weight: bold;
  font-size: 2rem;
`;

const Text = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
`;

const HeightResult = ({ motherHeight, fatherHeight }
  : { motherHeight: number, fatherHeight: number }
) => {
  return (
    <>
      <Wrapper>
        <ResultItem>
          <Heading>{'딸'}</Heading>
          <Text>{((motherHeight + fatherHeight - 13) / 2.0).toFixed(1)}</Text>
        </ResultItem>
        <ResultItem>
          <Heading>{'아들'}</Heading>
          <Text>{((motherHeight + fatherHeight + 13) / 2.0).toFixed(1)}</Text>
        </ResultItem>
      </Wrapper>
    </>
  );
}

export default HeightResult;