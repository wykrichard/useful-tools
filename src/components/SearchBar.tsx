import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Loader2 } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  aiSuggestion: string | null;
  isLoading: boolean;
}

export function SearchBar({ searchQuery, onSearchChange, aiSuggestion, isLoading }: SearchBarProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          {isLoading ? (
            <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('search.placeholder')}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
            transition-colors"
        />
      </div>
      {aiSuggestion && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {t('search.aiSuggestion')}:
            </span>{' '}
            {aiSuggestion}
          </p>
        </div>
      )}
    </div>
  );
}