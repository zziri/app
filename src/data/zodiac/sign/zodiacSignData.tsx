import { currentYear } from "@/data/common/commonData";
import Article from "@/types/Article";
import { range, zip } from "lodash-es"
import zodiacImage from '@/../public/images/zodiac.png';

const zodiacSignList = [
  'rat',
  'ox',
  'tiger',
  'rabbit',
  'dragon',
  'snake',
  'horse',
  'sheep',
  'monkey',
  'rooster',
  'dog',
  'pig',
]

const zodiacSignBaseYearList = [
  1912,
  1913,
  1914,
  1903,
  1904,
  1905,
  1906,
  1907,
  1908,
  1909,
  1910,
  1911,
]

const zodiacSignKoreanList = [
  '쥐',
  '소',
  '호랑이',
  '토끼',
  '용',
  '뱀',
  '말',
  '양',
  '원숭이',
  '닭',
  '개',
  '돼지',
];

const zodiacBaseYear = new Map(zip(zodiacSignList, zodiacSignBaseYearList));
const zodiacSignKorean = new Map(zip(zodiacSignList, zodiacSignKoreanList));
const serviceYearList = range(currentYear - 1, currentYear + 2);

const articleList: Array<Article> = [
  {
    subtitle: '십이간지',
    contents: (
      <>
        <article>
          한국에서 말하는 '띠'는 총 12가지가 있습니다. 이것을 '십이간지'라고 부르는데요. 그 해를 지켜주는 동물(?)과 같은 역할을 합니다.
          <br /><br />
          이 페이지를 만든 사람은 개띠인데요. 다른 사람의 띠를 알고 있을 때, 나이를 유추할 수 있습니다. 위 버튼들 중 띠를 선택하고 나이를 알아보세요!
        </article>
      </>
    ),
    imageSrc: zodiacImage,
    imageAlt: '십이간지'
  },
]

const zodiacSignConst = {
  articleList: articleList
};

export {
  zodiacBaseYear,
  zodiacSignKorean,
  zodiacSignList,
  currentYear,
  serviceYearList,
  zodiacSignConst
};