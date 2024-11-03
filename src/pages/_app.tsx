import DisplayAds from '@/components/common/DisplayAds';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Notice from '../components/common/Notice';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0px;
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

const Body = styled.div`
  padding: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <DisplayAds height='50px'/>
      <RecoilRoot>
        <Body>
          <Notice />
          <Main>
            <Component {...pageProps} />
          </Main>
        </Body>
      </RecoilRoot>
    </>
  );
}
