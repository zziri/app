import styled from "styled-components";

interface DescriptionProps {
  content: string;
}

const Article = styled.article`
  line-height: 150%;
  font-size: 1.2rem;
`;

export default function Description({ content }: DescriptionProps) {
  return (
    <>
      <div>
        <Article>{content}</Article>
      </div>
    </>
  );
}