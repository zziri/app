import NavigationBar from '@/components/common/NavigationBar';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <RecoilRoot>
        <div className='app-body'>
          <div className='app-main'>
            <Component {...pageProps} />
          </div>
        </div>
      </RecoilRoot>

      <style jsx global>{`
        body {
          background-color: #EFF6FF;
        }
        .app-body {
          padding: 1rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .app-main {
          width: 100%;
          max-width: 30rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        div {
          {/* border: solid; */}
        }
      `}</style>
    </>
  );
}
