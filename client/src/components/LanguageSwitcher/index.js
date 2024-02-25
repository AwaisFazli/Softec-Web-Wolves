import i18next from 'i18next';
import React from 'react';

export const LanguageSwitcher = () => {
  const handleLanguageChange = () => {
    if (i18next.language === 'en') {
      i18next.changeLanguage('ur');
      document.documentElement.lang = 'ur';
      document.documentElement.dir = 'rtl';
      localStorage.setItem('preferred_language', 'ur');
    } else {
      i18next.changeLanguage('en');
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
      localStorage.setItem('preferred_language', 'en');
    }
  };

  return (
    <button
      type="naked"
      className="language-switcher"
      onClick={handleLanguageChange}
      style={{ fontWeight: i18next.language === 'en' ? '900' : '400' }}
    >{i18next.language === 'en' ? 'ع' : 'EN'}</button>
  );
};
