import NavigationBar from '@/components/common/NavigationBar';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <RecoilRoot>
        <div className='body'>
          <div className='main'>
            <Component {...pageProps} />
          </div>
        </div>
      </RecoilRoot>

      <style jsx>{`
        .body {
          padding: 1rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .main {
          width: 100%;
          max-width: 30rem;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
