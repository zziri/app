import { styled } from "styled-components";
import Table from "./Table";
import TaxInsuranceService from "../_services/TaxInsuranceService";
import numeral from 'numeral';

const Frame = styled.div`
  /* border: 1px solid #ccc; */
`;

/**
 * @design 연봉, 실수령액, ..., 지방소득세를 저장하는 타입 정의
 * - 굳이 할 필요가...?
 */

/**
 * @design 세금 및 보험계산기 모듈 생성
 * - 각 세금과 보험료를 계산하는 함수를 포함
 * - 소득세, 지방소득세, 국민연금, 건강보험, 장기요양, 고용보험
 */

/**
 * @design '0' 3개 마다 ',' 찍는 것은 numeral 활용
 * - numeral(inputString).format('0,0')
 */

const start = 10_000_000;
const end = 100_000_000;
const step = 1_000_000;
const annualSalaryList = Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);

const Body = () => {
  const head = ['연봉', '실수령액', '공제액계', '국민연금', '건강보험', '장기요양', '고용보험', '소득세', '지방소득세'];
  const rows = annualSalaryList.map(annualSalary => {
    const incomeTax = TaxInsuranceService.getIncomeTax(annualSalary);
    const localIncomeTax = TaxInsuranceService.getLocalIncomeTax(annualSalary);
    const nationalPension = TaxInsuranceService.getNationalPension(annualSalary);
    const healthInsurance = TaxInsuranceService.getHealthInsurance(annualSalary);
    const longTermCareInsurance = TaxInsuranceService.getLongTermCareInsurance(annualSalary);
    const employmentInsurance = TaxInsuranceService.getEmploymentInsurance(annualSalary);
    const deduction = nationalPension + healthInsurance + longTermCareInsurance + employmentInsurance + incomeTax + localIncomeTax;
    const netIncome = Math.floor(annualSalary / 12) - deduction;
    return [
      numeral(annualSalary).format('0,0'),
      numeral(netIncome).format('0,0'),
      numeral(deduction).format('0,0'),
      numeral(nationalPension).format('0,0'),
      numeral(healthInsurance).format('0,0'),
      numeral(longTermCareInsurance).format('0,0'),
      numeral(employmentInsurance).format('0,0'),
      numeral(incomeTax).format('0,0'),
      numeral(localIncomeTax).format('0,0'),
    ];
  });
  return (
    <>
      <Frame>
        <Table head={head} rows={rows}/>
      </Frame>
    </>
  );
}

export default Body;
