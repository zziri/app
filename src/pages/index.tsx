import { Inter } from 'next/font/google';
import SeoHead from '@/components/SeoHead';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup } from 'react-bootstrap';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SeoHead title='홈 | 유용한 도구' description='홈 페이지입니다.' />
      <h1>유용한 도구</h1>
      <div className="list-group list-group-flush">
        <Link href="/calculator/d-day" className="list-group-item list-group-item-action">디데이 계산기</Link>
      </div>
    </>
  )
}
