import { Inter } from 'next/font/google'
import SeoHead from '@/components/SeoHead'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SeoHead title='타이틀' description='설명'/>
      <div>
        <h1>제목</h1>
        <h2>부제목</h2>
      </div>
    </>
  )
}
