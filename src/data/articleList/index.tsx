import Article from "@/types/Article";

const heightArticleList: Array<Article> = [
  {
    subtitle: '아이 키 계산',
    contents: (
      <>
        <article>
          아이의 키에 영향을 미치는 요인은 많지만, 단일 요인으로는 유전적인 요인이 가장 큽니다. 부모님의 키 평균값에 남자아이는 6.5cm를 더하고 여자아이는 6.5cm를 빼면 예상 키 값을 계산할 수 있습니다.
          <br /><br />
          그러나 오차 범위가 5cm 이내이고 100% 라고 할 수는 없습니다. 내 아이가 어느정도까지 클지 계산해보는 것도 좋지만, 키에 너무 집착하지 않는 것이 좋겠습니다.
        </article>
      </>
    ),
  },
]

export {
  heightArticleList,
}
