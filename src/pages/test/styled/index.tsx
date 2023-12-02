import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10rem;
`;
const Heading = styled.h1`
  border: solid;
`;
const Button = styled.button`
  border-radius: 5px;
`;

const StyledComponentPage = () => {
  return (
    <>
      <Wrapper>
        <Heading>{'헤딩'}</Heading>
        <Button>{'버튼'}</Button>
      </Wrapper>
    </>
  );
}

export default StyledComponentPage;