import type { AppProps } from 'next/app';
import ContextProvider from '../context/ContextProvider';
import { I18nextProvider } from 'react-i18next';
import i18next from '../config/i18next-translations';
import '../styles/_globals.css';
import 'animate.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <I18nextProvider i18n={i18next}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ContextProvider>
  )
}


export default MyApp
