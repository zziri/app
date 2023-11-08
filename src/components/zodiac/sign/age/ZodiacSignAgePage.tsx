import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import { zodiacBaseYear, zodiacSignKorean } from "@/data/zodiac/sign/zodiacSignData";
import { range } from "lodash-es";

interface TableRow {
  year: number;
  age: number;
}

interface TableProps {
  rowList: Array<TableRow>;
}

function getYearList(baseYear: number, currentYear: number): number[] {
  const limit = currentYear + 1;
  return range(baseYear, limit, 12);
}

function getKoreanAge(birthYear: number, currentYear: number) {
  const diff = currentYear - birthYear;
  const koreanAge = diff + 1;
  return koreanAge <= 0 ? 0 : koreanAge;
}

function ZodiacSignAgeTable({ rowList }: TableProps) {
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">출생연도</th>
              <th scope="col">나이</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {rowList.map((row, index) => {
              return (
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{row.year}년생</td>
                    <td>{row.age}세</td>
                  </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        * {
          background-color: transparent !important;
        }
        div {
          padding: 1rem 0;
        }
        table {
          margin: 0;
          font-size: 1.2rem;
        }
        * {
          text-align: center;
        }
      `}</style>
    </>
  );
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

  return (
    <>
      <SeoHead title={title} description={description} />
      <Title title={title} />
      <ZodiacSignAgeTable rowList={rowList}/>
      <EmptyDiv height={'2rem'}/>
      <Description content={description} />
    </>
  );
}