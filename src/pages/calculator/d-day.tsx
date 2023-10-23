import Calendar from "@/components/Calendar";
import DiffDayOutput from "@/components/DiffDayOutput";
import SeoHead from "@/components/SeoHead";
import 'styled-jsx';

export default function DDayCal() {
  return (
    <>
      <SeoHead
        title='디데이 계산기 | D-Day'
        description='D-Day 를 간단하게 계산할 수 있는 디데이 계산기입니다.' />
      <div>
        <h1>디데이 계산기</h1>
        <Calendar />
        <DiffDayOutput />
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
}