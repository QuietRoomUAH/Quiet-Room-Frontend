import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import LiveBackground from '@/components/LiveBackground';

if(typeof document !== 'undefined') {
  // you are safe to use the "document" object here
  document.body.style.backgroundColor = "#E0DDDD";
}

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <LiveBackground></LiveBackground>
    <Component {...pageProps} />
    </>
  );
}
