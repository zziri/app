import NavigationBar from '@/components/NavigationBar';
// import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@picocss/pico';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <div className='container'>
      <Component {...pageProps} />
      </div>
    </>
  );
}
