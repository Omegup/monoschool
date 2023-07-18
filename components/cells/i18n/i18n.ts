import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

type Lang = 'en' | 'fr' | 'ar';
interface LangData {
  [key: string]: { [k in string]: string } | string;
}
export const languages=['en']
//api
const useTranslationApi = (lang: Lang): LangData => {
  const data: { [k in Lang]: LangData } = {
    fr: {
      signIn: {
        password: 'Mot de passe',
        email: 'Email',
        logIn: 'Connexion',
      },
      text: 'Label',
    },
    en: {
      signIn: {
        password: 'Password',
        email: 'Email',
        logIn: 'Connection',
      },
      text: 'Label',
    },
    ar: {
      signIn: {
        password: 'كلمة السر',
        email: 'بريد إلكتروني',
        logIn: 'تسجيل الدخول',
      },
      text: 'Label',
    },
  };
  return data[lang];
};


const i18n = i18next.createInstance();
i18n
  .use(detector)
  .use(
    new Backend(null, {
      loadPath: '{{lng}}',
      request: (_, url, _p, cb) => {
        const data = useTranslationApi((url as Lang) || 'fr');
        if (data) {
          cb(null, { data: JSON.stringify(data), status: 200 });
        } else {
          cb(null, { status: 500, data: {} });
        }
      },
    })
  )
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    supportedLngs: ['en', 'fr', 'ar'],
    react: {
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
