import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'development' | 'productivity' | 'design' | 'communication';
  url: string;
  icon: LucideIcon;
}