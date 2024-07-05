import styled from "styled-components";

interface PaddingProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  children?: React.ReactNode;
}

const Container = styled.div<PaddingProps>`
  padding-left: ${props => props?.left};
  padding-right: ${props => props?.right};
  padding-top: ${props => props?.top};
  padding-bottom: ${props => props?.bottom};
`;

const Frame = styled.div`
  width: 100%;
  /* height: 100%; */
`;

const Padding = ({ left, right, top, bottom, children }: PaddingProps) => {
  return (
    <>
      <Frame>
        <Container left={left} right={right} top={top} bottom={bottom}>{children}</Container>
      </Frame>
    </>
  );
}

export default Padding;
