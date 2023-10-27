import Article from "@/types/Article";
import csatImage from '/public/images/csat.png';

const scheduleMap = new Map<string, Date>([
  ['2023', new Date('2022-11-17')],
  ['2024', new Date('2023-11-16')],
  ['2025', new Date('2024-11-14')],
  ['2026', new Date('2025-11-13')],
]);

const dDayCsatArticleList: Array<Article> = [
  {
    subtitle: '대학수학능력시험',
    contents: (
      <>
        <article>
          대학수학능력시험 또는 수능은 영어로 CSAT(College Scholastic Ability Test)로 표기하며 1994학년도부터 대한민국의 대학 입시에 도입한 시험입니다.
          <br /><br />
          고등학교 졸업 예정자, 졸업자, 검정고시 합격자와 같은 고등학교 졸업 학력과 동등한 학력을 가진 사람이 응시할 수 있습니다.
          <br /><br />
          한국교육과정평가원이 주관하고 매년 11월 셋째 목요일에 시행합니다.
        </article>
      </>
    ),
    imageSrc: csatImage,
    imageAlt: 'dd'
  },
  {
    subtitle: '수험생 필수 확인 사항',
    contents: (
      <>
        <article>
          자세한 내용은 <a href="https://www.suneung.re.kr/">수능 홈페이지</a>에서 확인 가능합니다.<br /><br />
          1) 수험표, 사진이 부착된 신분증 지참<br />
          2) 중식 및 음용수는 제공되지 않으며 시험실에는 시계가 없으므로 휴대가능한 시계를 사전 준비<br />
          3) 방역 지침을 준수하고 방송으로 안내되는 유의사항을 경청하여 그에 따라 응시<br />
          4) 본인의 선택 영역 및 선택과목의 문제지인지 확인 후 시험 응시<br />
            ※ 다만, 국어, 수학 영역은 제공받은 문제지 전체를 올려놓고 응시하되, 본인의 선택과목, 예를 들어 국어 영역에서는 ‘화법과 작문’, ‘언어와 매체’, 수학 영역에서는 ‘확률과 통계’, ‘미적분’, ‘기하’ 과목 중 본인이 선택한 과목의 문제지인지 확인하고 응시해야 함.<br />
          5) 문제지 문형 확인 및 부정행위 방지를 위해 매 교시 종료 후 문제지는 회수하며 별도 보관함.<br />
          6) 시험 중 돌발상황 등 발생 시, 수험생들은 감독관의 지시에 따라 침착하게 대응 요망<br />
          7) 격리 수험생이 이탈하여 일반 시험장 등으로 무단 출입 할 경우에는 그로 인한 피해 발생에 대한 구상권이 청구되거나 고발 등 법적인 조치를 받을 수 있음.
        </article>
      </>
    ),
    imageSrc: null,
    imageAlt: null
  },
]

export { scheduleMap, dDayCsatArticleList };
