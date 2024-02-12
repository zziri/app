import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 3rem;
`;

const StyledButton = styled.div`
  display: inline-flex;
  color: black;
  padding: 0.6rem 1rem;
  text-align: center;
  border-radius: 1.5rem;
  border: 0.1rem solid #ccc;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex: 1;

  &:active {
    border-color: #888; // even darker border on active/click
  }
`;

interface Props {
  text: string;
  handleClick?: () => void;
}

const BasicButton = ({ text, handleClick }: Props) => {
  const clickHandler = () => {
    if (!handleClick) {
      console.log('clickHandler');
      return;
    }
    handleClick();
  }

  return (
    <>
      <Wrapper>
        <StyledButton onClick={clickHandler}>{text}</StyledButton>
      </Wrapper>
    </>
  );
}

export default BasicButton;
