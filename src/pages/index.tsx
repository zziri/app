import { Inter } from 'next/font/google';
import SeoHead from '@/components/common/SeoHead';
import Title from '@/components/common/Title';
import HomeFunction from '@/components/home/HomeFunction';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const title = '유용한 도구 모음';
  return (
    <>
      <SeoHead title={title} description='홈 페이지입니다.' />
      <Title title={title}/>
      <HomeFunction />

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-content: center;
        }
      `}</style>
    </>
  )
}
