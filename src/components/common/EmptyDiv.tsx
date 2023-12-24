import styled from "styled-components";

interface EmptyDivProps {
  height: string;
}

const Wrapper = styled.div<EmptyDivProps>`
  height: ${props => props.height};
`;

export default function EmptyDiv({ height }: EmptyDivProps) {
  return (
    <>
      <Wrapper height={height} />
    </>
  );
}
