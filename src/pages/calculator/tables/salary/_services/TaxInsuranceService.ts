import taxTable from '@/data/salary/2024-tax.json';
/**
 * @design 세금 및 보험계산기
 * - 소득세
 * - 지방소득세
 * - 국민연금
 * - 건강보험
 * - 장기요양
 * - 고용보험
 */

/**
 * @design 월급 계산시 1원단위 빼고, 세금이나 보험료 계산 후에도 1원 단위 빼서 결과 리턴
 */

const TaxInsuranceService = (() => {
  /**
   * 연봉으로 소득세를 계산하는 함수
   * - 간이세액표를 기준으로 계산
   */
  const getIncomeTax = (annualSalary: number) => {
    const monthlySalary = floor(annualSalary / 12);
    const taxInfo = taxTable.find(
      (t) => monthlySalary >= t.start && monthlySalary < t.end
    );
    return taxInfo?.tax ?? 0;
  };

  /**
   * 지방소득세 계산
   * - 소득세의 10%로 계산
   */
  const getLocalIncomeTax = (annualSalary: number) => {
    return floor(getIncomeTax(annualSalary) * 0.1);
  };

  /**
   * 국민연금보험료 계산
   * - 월 급여의 4.5%로 계산
   */
  const getNationalPension = (annualSalary: number) => {
    return floor(annualSalary * 0.045 / 12);
  };

  /**
   * 건강보험료 계산
   * - 월 급여의 3.545%로 계산
   */
  const getHealthInsurance = (annualSalary: number) => {
    return floor(annualSalary * 0.03545 / 12);
  }

  /**
   * 장기요양보험료 계산
   * - 월 급여의 0.4591%로 계산
   */
  const getLongTermCareInsurance = (annualSalary: number) => {
    return floor(annualSalary * 0.004591 / 12);
  }

  /**
   * 고용보험료 계산
   * - 월 급여의 0.9%로 계산
   */
  const getEmploymentInsurance = (annualSalary: number) => {
    return floor(annualSalary * 0.009 / 12);
  }

  /**
   * 1의 자리수를 버리는 함수
   */
  const floor = (num: number) => {
    return Math.floor(num / 10) * 10;
  }

  return {
    getIncomeTax,
    getLocalIncomeTax,
    getNationalPension,
    getHealthInsurance,
    getLongTermCareInsurance,
    getEmploymentInsurance,
    floor,
  }
})();

export default TaxInsuranceService;