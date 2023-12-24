import NavigationBar from '@/components/common/NavigationBar';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@/styles/globals.css';
import reset, { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0px;
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
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
          {/* background-color: #EFF6FF; */}
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
