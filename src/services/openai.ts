import OpenAI from 'openai';
import { Tool } from '../types/tool';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getAISuggestions(query: string, tools: Tool[]) {
  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    console.warn('OpenAI API key is not set');
    return null;
  }

  try {
    const toolsData = tools.map(({ name, description, category }) => ({
      name,
      description,
      category
    }));

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that helps users find the right tools based on their needs. Provide concise, relevant suggestions."
        },
        {
          role: "user",
          content: `Given these tools: ${JSON.stringify(toolsData)}, and this search query: "${query}", suggest the most relevant tools and explain why they might be useful. Keep the response under 2 sentences.`
        }
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    return null;
  }
}