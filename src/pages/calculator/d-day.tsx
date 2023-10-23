import Calendar from "@/components/Calendar";
import SeoHead from "@/components/SeoHead";

export default function DDayCal() {
  return (
    <>
      <SeoHead
        title='디데이 계산기 | D-Day'
        description='D-Day 를 간단하게 계산할 수 있는 디데이 계산기입니다.' />
      <h1>디데이 계산기</h1>
      <Calendar />
    </>
  );
}