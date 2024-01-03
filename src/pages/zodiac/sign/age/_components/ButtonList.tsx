import styled from "styled-components";

interface WrapperProps {
  direction: 'row' | 'column';
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: space-between;
  gap: 0.2rem;
`;

const Button = styled.div`
  border-radius: 0.5rem;
  border-color: #6C757D;
  border-style: solid;
  border-width: 1px;
  padding: 0.7rem 1rem;
  cursor: pointer;
  flex: 1;
`;

const Text = styled.p`
  /* color: #333538; */
`;

interface Item {
  text: string;
  onClick: () => void;
}

interface Props {
  items?: Array<Item>;
  direction?: 'row' | 'column';
}

const ButtonList = ({ items = [], direction = 'column' }: Props) => {
  return (
    <>
      <Wrapper direction={direction}>
        {items.map((item, index) => {
          return <Button key={index} onClick={item.onClick}>
            <Text>{item.text}</Text>
          </Button>
        })}
      </Wrapper>
    </>
  );
}

export default ButtonList;
