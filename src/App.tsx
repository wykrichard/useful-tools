import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { ToolCard } from './components/ToolCard';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';
import { ThemeProvider } from './contexts/ThemeContext';
import { tools } from './data/tools';
import { useToolsFilter } from './hooks/useToolsFilter';
import { useAISearch } from './hooks/useAISearch';
import debounce from 'lodash/debounce';

function App() {
  const { t } = useTranslation();
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredTools
  } = useToolsFilter(tools);

  const {
    aiSuggestion,
    isLoading,
    getAISearchResults
  } = useAISearch(tools);

  const debouncedAISearch = useCallback(
    debounce((query: string) => {
      getAISearchResults(query);
    }, 500),
    [getAISearchResults]
  );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    debouncedAISearch(query);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6 mb-8">
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              aiSuggestion={aiSuggestion}
              isLoading={isLoading}
            />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                {t('noResults')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;