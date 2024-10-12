import styled, { css } from "styled-components";
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

const Frame = styled.table`
  display: block;
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  display: block;
  overflow-x: scroll;
  position: sticky;
  top: 0;
  z-index: 99;

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none; /* 웹킷 기반 브라우저 (Chrome, Safari) */
  }
  -ms-overflow-style: none; /* IE 및 Edge */
  scrollbar-width: none; /* Firefox */
`;

const HeaderRow = styled.tr`
  background-color: #F3F3F3;
`;

const TableBody = styled.tbody`
  overflow-x: scroll;
  display: block;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  /* 스크롤바 트랙 스타일 (스크롤바의 배경) */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.25rem;
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

const BodyRow = styled.tr`
  border-bottom: 2px solid #EBEBEB;
`;

interface CellProps {
  $minWidths: number[];
}

const HeaderCell = styled.th<CellProps>`
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  padding: 0.5rem 1rem;

  ${({ $minWidths }) => $minWidths.map((width, index) => css`
    &:nth-child(${index + 1}) {
      min-width: ${width}rem;
    }
  `)}
`;

const BodyCell = styled.td<CellProps>`
  text-align: center;
  white-space: nowrap;
  padding: 0.5rem 1rem;

  ${({ $minWidths }) => $minWidths.map((width, index) => css`
    &:nth-child(${index + 1}) {
      min-width: ${width}rem;
    }
  `)}
`;

interface Props {
  head: Array<string>;
  rows: Array<Array<string>>;
  minWidths: Array<number>;
}

const Table = ({ head = [], rows = [[]], minWidths = [] }: Props) => {
  // minWidths가 head보다 짧을 경우, head의 길이만큼 나머지를 0으로 채워줌
  if (minWidths.length < head.length) {
    const diff = head.length - minWidths.length;
    minWidths = minWidths.concat(Array.from({ length: diff }, () => 0));
  }

  return (
    <ScrollSync>
      <Frame>
        <ScrollSyncPane>
          <TableHead>
            <HeaderRow>
              {head.map((item, index) => (
                <HeaderCell key={index} $minWidths={minWidths}>{item}</HeaderCell>
              ))}
            </HeaderRow>
          </TableHead>
        </ScrollSyncPane>
        <ScrollSyncPane>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <BodyRow key={rowIndex}>
                {row.map((item, index) => (
                  <BodyCell key={index} $minWidths={minWidths}>{item}</BodyCell>
                ))}
              </BodyRow>
            ))}
          </TableBody>
        </ScrollSyncPane>
      </Frame>
    </ScrollSync>
  );
}

export default Table;
