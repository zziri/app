import { Inter } from 'next/font/google';
import SeoHead from '@/components/SeoHead';
import ListGroup from '@/components/ListGroup';
import Title from '@/components/Title';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const title = '유용한 도구 모음';
  return (
    <>
      <SeoHead title={title} description='홈 페이지입니다.' />
      <div>
        <Title title={title}/>
        <ListGroup />
      </div>

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
