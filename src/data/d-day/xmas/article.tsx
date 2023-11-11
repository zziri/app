import Article from "@/types/Article";
import xmasSnowflakeImage from '@/../public/images/snowflake-xmas.jpg';

const dDayXmasArticleList: Array<Article> = [
  {
    subtitle: '크리스마스',
    contents: (
      <>
        <article>
          크리스마스는 예수의 탄생을 기리는 날로, 매년 12월 25일입니다. 예수의 탄생을 기리는 날이지만 요즘 사람들 사이에서는 사랑하는 이들과 함께 시간을 보내는 날이라는 이미지가 강합니다.
          <br /><br />
          크리스마스까지 남은 날짜(디데이)를 확인하고 여유롭게 사랑하는 사람에게 줄 선물을 준비해보는 것도 좋겠습니다.
        </article>
      </>
    ),
    imageSrc: xmasSnowflakeImage,
    imageAlt: '크리스마스'
  },
]

export default dDayXmasArticleList;
