import { styled } from "styled-components";
import Table from "./Table";

const Frame = styled.div`
  /* border: 1px solid #ccc; */
`;

const Body = () => {
  const head = ['연봉', '실수령액', '공제액계', '국민연금', '건강보험', '장기요양', '고용보험', '소득세', '지방소득세'];
  const rows = [
    ['1,000만', '771,033', '62,300', '32,990', '22,870', '1,680', '4,760', '0', '0'],
  ];
  return (
    <>
      <Frame>
        <Table head={head} rows={rows}/>
      </Frame>
    </>
  );
}

export default Body;
