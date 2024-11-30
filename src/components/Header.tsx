import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrench } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Wrench className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('header.title')}
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {t('header.subtitle')}
        </p>
      </div>
    </header>
  );
}