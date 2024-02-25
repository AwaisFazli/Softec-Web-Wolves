import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import application_ar from './urdu.json';
import application_en from './english.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        application: application_en,
      },
      ur: {
        application: application_ar,
      },
    },
    lng: localStorage.getItem('preferred_language') || 'ur',
  })
  .then(() => {
    console.log('i18next initialized successfully');
  })
  .catch((error) => {
    console.error('Error initializing i18next:', error);
  });

document.documentElement.lang = i18next?.language === 'en' ? 'en' : 'ur';
document.documentElement.dir = i18next?.language === 'en' ? 'ltr' : 'rtl';
