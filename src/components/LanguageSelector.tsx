import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {t(`language.${i18n.language === 'en' ? 'zh' : 'en'}`)}
      </span>
    </button>
  );
}