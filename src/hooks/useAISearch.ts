import { useState, useCallback } from 'react';
import { getAISuggestions } from '../services/openai';
import { Tool } from '../types/tool';

export function useAISearch(tools: Tool[]) {
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAISearchResults = useCallback(async (query: string) => {
    if (query.length < 3) {
      setAiSuggestion(null);
      return;
    }

    setIsLoading(true);
    try {
      const suggestion = await getAISuggestions(query, tools);
      setAiSuggestion(suggestion);
    } catch (error) {
      console.error('Error in AI search:', error);
      setAiSuggestion(null);
    } finally {
      setIsLoading(false);
    }
  }, [tools]);

  return {
    aiSuggestion,
    isLoading,
    getAISearchResults
  };
}