import { ReactNode } from 'react';

export interface DefaultTemplateProps {
    children: ReactNode;
  }

export interface TranslationComponentProps {
    text: string;
    targetLanguage: string;
}

export interface Project {
  id: number;
  name: string;
  languages: string[];
  description: string;
  link_project: string;
  github: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface Tools {
  id: number;
  name: string;
  img: string;
}

export interface ToolsCardProps {
  tool: Tools;
}