import Article from "@/types/Article";

const passwordArticleList: Array<Article> = [
  {
    subtitle: '강력한 비밀번호를 만드는 방법',
    contents: (
      <>
        <article>
          비밀번호 길이를 Range Bar를 움직이거나 직접 입력하면 비밀번호가 생성됩니다. 비밀번호가 길수록 더 안전합니다. 10자 이상의 비밀번호를 만들어보세요.
          <br /><br />
          비밀번호가 복잡할수록 강력하고 안전합니다. 이 패스워드 생성기는 랜덤으로 복잡한 비밀번호를 만들어줍니다.
          <br /><br />
          계정마다 비밀번호가 다른 것이 좋습니다. 비밀번호를 공통화하기보다는 계정마다 고유한 비밀번호를 만들어보세요.
        </article>
      </>
    ),
    imageSrc: null,
    imageAlt: null
  },
]

export { passwordArticleList };