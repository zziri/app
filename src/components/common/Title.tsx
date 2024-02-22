import { styled } from "styled-components";

interface TitleProps {
  title: string;
}

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 1.9rem;
  margin: 0;
  font-weight: bold;
`;

export default function Title({ title }: TitleProps) {
  return (
    <>
      <Wrapper>
        <Header>{title}</Header>
      </Wrapper>
    </>
  );
}
