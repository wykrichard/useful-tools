import { Tool } from '../types/tool';
import { Code, PenTool, Notebook, MessageSquare } from 'lucide-react';

export const tools: Tool[] = [
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    description: 'Powerful code editor with extensive plugin support',
    category: 'development',
    url: 'https://code.visualstudio.com',
    icon: Code,
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Collaborative interface design tool',
    category: 'design',
    url: 'https://figma.com',
    icon: PenTool,
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes and collaboration',
    category: 'productivity',
    url: 'https://notion.so',
    icon: Notebook,
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Business communication platform',
    category: 'communication',
    url: 'https://slack.com',
    icon: MessageSquare,
  },
];