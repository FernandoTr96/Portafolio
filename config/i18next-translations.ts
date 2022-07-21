import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_en from '../translations/en/global.json';
import global_es from '../translations/es/global.json';


i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'es',
    debug: false,
    //idioma inicial
    lng: "es",
    //registramos las tradcciones json
    resources:{
        es:{
            global: global_es
        },
        en:{
            global: global_en
        }
    },
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  });


export default i18n;