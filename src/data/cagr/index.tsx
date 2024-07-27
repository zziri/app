import Article from "@/types/Article";

const cagrArticleList: Array<Article> = [
  {
    subtitle: 'CAGR',
    contents: (
      <>
        <article>
          CAGR(Compound Annual Growth Rate)는 연평균 성장률을 뜻합니다.
          연평균 성장률을 알고 있으면 투자 기간 동안 자산이 얼마나 성장할지 예측이 가능합니다.
          <br /><br />
          만약 CAGR이 5%인 경우, 자산이 매년 5%씩 복리로 성장한다는 의미입니다.
        </article>
      </>
    ),
    imageSrc: null,
    imageAlt: null
  },
  {
    subtitle: '72법칙',
    contents: (
      <>
        <article>
          72법칙은 72를 수익률로 나누면 원금이 2배가 될 때까지 걸리는 시간을 구할 수 있습니다.
          <br /><br />
          만약 CAGR이 5%라면 72 / 5 = 14.4 이므로 원금이 2배가 되는데에 약 14년이 걸립니다.
          거듭제곱으로 계산해보아도 1.05 ^ 14.4 = 2.01895 입니다.
        </article>
      </>
    ),
    imageSrc: null,
    imageAlt: null
  },
]

export { cagrArticleList };
