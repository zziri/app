import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div<{ head?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: ${props => props.head && '#F8954A'};
  border-bottom: ${props => !props.head && '2px solid #EBEBEB'};
`;

const Text = styled.p<{ head?: boolean }>`
  font-weight: ${props => props.head && 'bold'};
  flex: 1;
  text-align: center;
  color: ${props => props.head && 'white'};
`;

interface Props {
  head: Array<string>;
  rows: Array<Array<string>>;
}

const Table = ({ head = [], rows = [[]] }: Props) => {
  return (
    <Wrapper>
      <Row head>
        {head.map((item, index) => {
          return <Text head key={index}>{item}</Text>
        })}
      </Row>
      {rows.map((row, rowIndex) => {
        return <Row key={rowIndex}>
          {row.map((item, index) => {
            return <Text key={index}>{item}</Text>
          })}
        </Row>
      })}
    </Wrapper>
  );
}

export default Table;