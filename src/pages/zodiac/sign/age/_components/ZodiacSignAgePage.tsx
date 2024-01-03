import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import { zodiacBaseYear, zodiacSignConst, zodiacSignKorean } from "@/data/zodiac/sign/zodiacSignData";
import { range } from "lodash-es";
import Table from "./Table";

function getYearList(baseYear: number, currentYear: number): number[] {
  const limit = currentYear + 1;
  return range(baseYear, limit, 12);
}

function getKoreanAge(birthYear: number, currentYear: number) {
  const diff = currentYear - birthYear;
  const koreanAge = diff + 1;
  return koreanAge <= 0 ? 0 : koreanAge;
}

function getKoreanSign(sign: string) {
  return zodiacSignKorean.get(sign) || '개';
}

function getBaseYear(sign: string) {
  return zodiacBaseYear.get(sign) || 1910;
}

interface PageProps {
  year: number;
  sign: string;
}

export default function ZodiacSignAgePage({ year, sign }: PageProps) {
  const koreanSign = getKoreanSign(sign);
  const title = `${year}년 ${koreanSign}띠 나이`;
  const description = `${year}년 기준 ${koreanSign}띠인 사람들의 나이 정보를 표시해주는 페이지입니다.
  나이는 한국 나이(세는 나이)를 기준으로 합니다.`;

  const yearList = getYearList(getBaseYear(sign), year);
  const rowList = yearList.map(y => ({ year: y, age: getKoreanAge(y, year)}));

  const head = ['#', '출생연도', '나이'];
  const rows = yearList.map((y, i) => [`${i+1}`, `${y}년생`, `${getKoreanAge(y, year)}세`]);

  return (
    <>
      <SeoHead title={title} description={description} />
      <Title title={title} />
      <Description content={description} />
      <Table head={head} rows={rows} />
      <SeoArticle list={zodiacSignConst.articleList} />
    </>
  );
}
