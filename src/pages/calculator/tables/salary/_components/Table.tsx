import styled from "styled-components";

const OverflowContainer = styled.div`
  overflow-x: scroll;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  /* 스크롤바 트랙 스타일 (스크롤바의 배경) */
  &::-webkit-scrollbar-track {
    /* background: #f1f1f1;
    border-radius: 0.25rem; */
  }

  /* 스크롤바 핸들 스타일 (스크롤바 자체) */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.25rem;
  }

  /* 스크롤바 핸들 호버 스타일 (마우스를 올려놓은 상태의 스크롤바 자체) */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Frame = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderRow = styled.tr`
  background-color: #F3F3F3;
`;

const BodyRow = styled.tr`
  border-bottom: 2px solid #EBEBEB;
`;

const HeaderCell = styled.th`
  font-weight: bold;
  text-align: center;
  /* color: white; */
  white-space: nowrap;
  padding: 0.5rem 1rem;
`;

const BodyCell = styled.td`
  text-align: center;
  white-space: nowrap;
  padding: 0.5rem 1rem;
`;

interface Props {
  head: Array<string>;
  rows: Array<Array<string>>;
}

const Table = ({ head = [], rows = [[]] }: Props) => {
  return (
    <OverflowContainer>
      <Frame>
        <thead>
          <HeaderRow>
            {head.map((item, index) => (
              <HeaderCell key={index}>{item}</HeaderCell>
            ))}
          </HeaderRow>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <BodyRow key={rowIndex}>
              {row.map((item, index) => (
                <BodyCell key={index}>{item}</BodyCell>
              ))}
            </BodyRow>
          ))}
        </tbody>
      </Frame>
    </OverflowContainer>
  );
}

export default Table;