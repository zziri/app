import SeoHead from '@/components/common/SeoHead';
import Title from '@/components/common/Title';
import { currentYear } from '@/data/common/commonData';
import { toString } from 'lodash-es';
import LinkList from './_components/LinkList';

function getDefaultCsatYear() {
  return toString(currentYear + 1);
}

const defaultCsatYear = getDefaultCsatYear();

const items = [
  {
    text: '디데이 계산기',
    url: '/calculator/d-day'
  },
  {
    text: `${defaultCsatYear}학년도 수능 디데이`,
    url: `/calculator/d-day/csat/${defaultCsatYear}`
  },
  {
    text: '랜덤 숫자 뽑기',
    url: '/extractor/random'
  },
  {
    text: '랜덤 비밀번호 생성기',
    url: '/extractor/password'
  },
  {
    text: '올해 띠별 나이',
    url: '/zodiac/sign/age/home'
  }
];

export default function Home() {
  const title = '유용한 도구 모음';
  return (
    <>
      <SeoHead title={title} description='홈 페이지입니다.' />
      <Title title={title}/>
      <LinkList items={items} />
    </>
  )
}
