
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
    /**
     * TODO: 간이세액표를 기준으로 소득세를 계산하는 함수를 작성
     */
    return (annualSalary / 12) * 0.05;
    // let incomeTax = 0;
    // if (annualSalary <= 14_000_000) {
    //   incomeTax = annualSalary * 0.06;
    // } else if (annualSalary <= 50_000_000) {
    //   incomeTax = 840_000 + (annualSalary - 14_000_000) * 0.15;
    // } else if (annualSalary <= 88_000_000) {
    //   incomeTax = 6_240_000 + (annualSalary - 50_000_000) * 0.24;
    // } else if (annualSalary <= 150_000_000) {
    //   incomeTax = 15_360_000 + (annualSalary - 88_000_000) * 0.35;
    // } else if (annualSalary <= 300_000_000) {
    //   incomeTax = 37_060_000 + (annualSalary - 150_000_000) * 0.38;
    // } else if (annualSalary <= 500_000_000) {
    //   incomeTax = 94_060_000 + (annualSalary - 300_000_000) * 0.40;
    // } else if (annualSalary <= 1_000_000_000) {
    //   incomeTax = 174_060_000 + (annualSalary - 500_000_000) * 0.42;
    // } else {
    //   incomeTax = 384_060_000 + (annualSalary - 1_000_000_000) * 0.45;
    // }
    // return incomeTax;
  };

  /**
   * 지방소득세 계산
   * - 소득세의 10%로 계산
   */
  const getLocalIncomeTax = (annualSalary: number) => {
    return getIncomeTax(annualSalary) * 0.1;
  };

  /**
   * 국민연금보험료 계산
   * - 월 급여의 4.5%로 계산
   */
  const getNationalPension = (annualSalary: number) => {
    return (annualSalary / 12) * 0.045;
  };

  /**
   * 건강보험료 계산
   * - 월 급여의 3.545%로 계산
   */
  const getHealthInsurance = (annualSalary: number) => {
    return (annualSalary / 12) * 0.03545;
  }

  /**
   * 장기요양보험료 계산
   * - 월 급여의 0.4591%로 계산
   */
  const getLongTermCareInsurance = (annualSalary: number) => {
    return (annualSalary / 12) * 0.004591;
  }

  /**
   * 고용보험료 계산
   * - 월 급여의 0.9%로 계산
   */
  const getEmploymentInsurance = (annualSalary: number) => {
    return (annualSalary / 12) * 0.009;
  }

  return {
    getIncomeTax,
    getLocalIncomeTax,
    getNationalPension,
    getHealthInsurance,
    getLongTermCareInsurance,
    getEmploymentInsurance,
  }
})();

export default TaxInsuranceService;