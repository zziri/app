import { Inter } from 'next/font/google';
import SeoHead from '@/components/SeoHead';
import ListGroup from '@/components/ListGroup';
import Title from '@/components/Title';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SeoHead title='홈 | 유용한 도구' description='홈 페이지입니다.' />
      <div>
        <Title title='유용한 도구'/>
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
