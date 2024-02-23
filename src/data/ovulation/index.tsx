import Article from "@/types/Article";

const ovulationArticleList: Array<Article> = [
  {
    subtitle: '배란일 계산',
    contents: (
      <>
        <article>
          간단하게 배란일 예정일을 계산해볼 수 있습니다. 다음 생리 예정일을 알고 있다면 이 날로부터 18일 전은 배란기 시작, 12일 전은 배란기 끝, 14일 전을 배란 예정일로 예측할 수 있습니다.
          <br /><br />
          어디까지나 배란일 예정일을 예측하는 방법이므로 오차는 생길 수 있습니다.
        </article>
      </>
    ),
  },
]

export {
  ovulationArticleList,
}
