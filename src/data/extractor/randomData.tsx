import Article from "@/types/Article";

const randomArticleList: Array<Article> = [
  {
    subtitle: '사용법',
    contents: (
      <>
        <article>
          숫자의 범위는 무작위로 숫자를 뽑은 결과에 나올 수 있는 숫자들의 범위를 뜻합니다. 원하는 숫자 범위를 설정해 주세요.
          <br /><br />
          개수는 무작위로 뽑을 숫자의 개수를 의미합니다. 10으로 설정하면 숫자 범위 내에서 최대 10개의 숫자를 무작위로 선택합니다. 뽑기 버튼을 눌러서 숫자를 뽑을 수 있습니다.
          <br /><br />
          복사 버튼을 누르면 숫자를 뽑은 결과를 클립보드에 복사합니다. 결과를 직접 드래그해서 블록지정한 후 복사하는 것과 동일하게 동작합니다.
        </article>
      </>
    ),
  },
]

export { randomArticleList };
