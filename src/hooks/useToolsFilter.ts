import { useMemo, useState } from 'react';
import { Tool } from '../types/tool';

export function useToolsFilter(tools: Tool[]) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => 
    Array.from(new Set(tools.map((tool) => tool.category))),
    [tools]
  );

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = !selectedCategory || tool.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [tools, selectedCategory, searchQuery]);

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredTools
  };
}