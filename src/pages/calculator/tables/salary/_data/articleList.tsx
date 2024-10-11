import Article from "@/types/Article";

const salaryArticleList: Array<Article> = [
  {
    subtitle: '참고사항',
    contents: (
      <>
        <article>
          비과세액, 부양가족, 산재보험 등 개인에 따라서 오차가 생길 수 있습니다.
          <br /><br />
          2024년을 기준으로 세금과 보험료가 계산되었습니다.
          <br /><br />
          부양가족수 1명, 20세 이하 자녀수 0명, 비과세액 0원을 기준으로 계산되었습니다.
          <br /><br />
          국민연금 기준소득월액 상한액은 6,170,000원으로 계산되었습니다.
          <br /><br />
          1억원을 초과하는 연봉에 대한 실수령액과 세금 및 보험료는 업데이트 예정입니다.
        </article>
      </>
    ),
  },
]

export default salaryArticleList;
