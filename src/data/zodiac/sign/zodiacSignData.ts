import { currentYear } from "@/data/common/commonData";
import { getYear } from "date-fns";
import { range, zip } from "lodash-es"

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

export {
  zodiacBaseYear,
  zodiacSignKorean,
  zodiacSignList,
  currentYear,
  serviceYearList
};