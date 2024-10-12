import taxTable from '@/data/salary/2024-tax.json';

const TaxService = (() => {
  /**
   * 연봉으로 소득세를 계산하는 함수
   * - 간이세액표를 기준으로 계산
   */
  const getIncomeTax = (annualSalary: number): number => {
    const monthlySalary = floor(annualSalary / 12);
    if (monthlySalary <= 10_000_000) {
      const taxInfo = taxTable.find(
        (t) => monthlySalary >= t.start && monthlySalary < t.end
      );
      return taxInfo?.tax ?? 0;
    }

    const baseTax = getIncomeTax(10_000_000);

    if (monthlySalary > 10_000_000 && monthlySalary <= 14_000_000) {
      // 10,000,000원에 대한 소득세액 + (10,000,000을 초과하는 금액) * 0.98 * 0.35 + 25,000
      return baseTax + (monthlySalary - 10_000_000) * 0.98 * 0.35 + 25000;
    } else if (monthlySalary > 14_000_000 && monthlySalary <= 28_000_000) {
      // 10,000,000원에 대한 소득세액 + 1,397,000 + (14,000,000을 초과하는 금액) * 0.98 * 0.38
      return baseTax + 1397000 + (monthlySalary - 14_000_000) * 0.98 * 0.38;
    } else if (monthlySalary > 28_000_000 && monthlySalary <= 30_000_000) {
      // 10,000,000원에 대한 소득세액 + 6,610,600 + (28,000,000을 초과하는 금액) * 0.98 * 0.40
      return baseTax + 6610600 + (monthlySalary - 28_000_000) * 0.98 * 0.40;
    } else if (monthlySalary > 30_000_000 && monthlySalary <= 45_000_000) {
      // 10,000,000원에 대한 소득세액 + 7,394,600 + (30,000,000을 초과하는 금액) * 0.40
      return baseTax + 7394600 + (monthlySalary - 30_000_000) * 0.40;
    } else if (monthlySalary > 45_000_000 && monthlySalary <= 87_000_000) {
      // 10,000,000원에 대한 소득세액 + 13,394,600 + (45,000,000을 초과하는 금액) * 0.42
      return baseTax + 13394600 + (monthlySalary - 45_000_000) * 0.42;
    }
    // 87,000,000원 초과시, 10,000,000원에 대한 소득세액 + 31,034,600 + (87,000,000을 초과하는 금액) * 0.45
    return baseTax + 31034600 + (monthlySalary - 87_000_000) * 0.45;
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
   * - 기준소득월액 상한액 6,170,000원
   */
  const getNationalPension = (annualSalary: number) => {
    const value = annualSalary * 0.045 / 12;
    const maxValue = 6_170_000 * 0.045;
    return floor(Math.min(value, maxValue));
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
   * - 월급 계산시 1원단위 빼고, 세금이나 보험료 계산 후에도 1원 단위 빼야함
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
});

export default TaxService;
