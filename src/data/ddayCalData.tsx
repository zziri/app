import Article from "@/types/Article";

const dDayArticleList: Array<Article> = [
  {
    subtitle: '디데이의 의미',
    contents: (
      <>
        <article>
          디데이(D-Day)는 원래 군사용어로 사용되었는데요, 중대한 작전이나 이벤트가 시작되는 특정 날짜를 뜻합니다.
          <br /><br />
          이 용어는 2차 세계 대전 동안 노르망디 상륙 작전의 날짜인 1944년 6월 6일과 가장 밀접하게 연관되어 있습니다. 당시 독일군에게 작전 날짜를 노출시키지 않기 위해 특정한 날짜 대신 D-Day라는 표현을 사용했다고 합니다.
          <br /><br />
          군사적 맥락에서 시작된 D-Day는 현재 군 영역을 넘어 다양한 분야에서 사용되고 있습니다. 중요한 일이 진행되는 날을 가리키는 의미로 사용합니다.
          <br /><br />
          사람들은 일상생활에서 D-Day가 언제인지, 오늘로부터 D-Day까지 몇 일이 남았는지, 또는 D-10과 같이 이벤트 전 후의 특정 날짜를 계산할 때 이 용어를 사용합니다. 이러한 계산을 도와주는 D-Day 계산기를 사용하면 이러한 날짜들을 쉽게 파악하고 계획을 세울 수 있습니다.
        </article>
      </>
    ),
    imageSrc: null,
    imageAlt: null
  },
  {
    subtitle: 'D-day 계산기 사용법',
    contents: (
      <>
        <article>
          날짜를 선택하거나 키보드로 yyyy-mm-dd 형식으로 입력하기만 하면 디데이 계산 결과가 <strong>남은 일수</strong> 필드에 노출됩니다.
          <br /><br />
          브라우저 환경 기반으로 오늘 날짜를 기준으로 디데이를 계산합니다.
          <br /><br />
          디데이 계산된 결과가 D-10 이라면 오늘로부터 10일 뒤에 선택한 날짜가 된다는 의미입니다.
        </article>
      </>
    ),
    imageSrc: null,
    imageAlt: null
  }
]

export { dDayArticleList };
