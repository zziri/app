import { useRouter } from "next/navigation";
import styled from "styled-components";

interface ListItem {
  text: string;
  url: string;
}

interface Props {
  items: Array<ListItem>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.div`
  color: black;
  border-bottom: 0.1rem solid #ccc;
  padding: 1rem;
  &:last-child {
    border-bottom: none;
  }
`;

const Text = styled.p`
  
`;

const LinkList = ({ items = [] }: Props) => {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        {items.map((item, index) => {
          return <Link key={index} onClick={() => router.push(item.url)}>
            <Text>{item.text}</Text>
          </Link>
        })}
      </Wrapper>
    </>
  );
}

export default LinkList;