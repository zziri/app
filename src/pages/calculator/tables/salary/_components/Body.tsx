import { styled } from "styled-components";
import Table from "./Table";
import numeral from 'numeral';
import TaxService from "@/utils/TaxService";

const Frame = styled.div`
  /* border: 1px solid #ccc; */
`;

const start = 10_000_000;
const end = 100_000_000;
const step = 1_000_000;
const annualSalaryList = Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
const taxService = TaxService();

const Body = () => {
  const head = ['연봉', '실수령액', '공제액계', '국민연금', '건강보험', '장기요양', '고용보험', '소득세', '지방소득세'];
  const minWidths = [6, 6, 6, 5, 5, 4, 4, 6, 5];
  const rows = annualSalaryList.map(annualSalary => {
    const incomeTax = taxService.getIncomeTax(annualSalary);
    const localIncomeTax = taxService.getLocalIncomeTax(annualSalary);
    const nationalPension = taxService.getNationalPension(annualSalary);
    const healthInsurance = taxService.getHealthInsurance(annualSalary);
    const longTermCareInsurance = taxService.getLongTermCareInsurance(annualSalary);
    const employmentInsurance = taxService.getEmploymentInsurance(annualSalary);
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
        <Table head={head} rows={rows} minWidths={minWidths}/>
      </Frame>
    </>
  );
}

export default Body;
