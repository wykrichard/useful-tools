import React from 'react';
import { Tool } from '../types/tool';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}