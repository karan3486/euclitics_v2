'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProjectDetailsSlider } from './project-details-slider';

interface ProjectDetailsContextType {
  openProjectDetails: (slug: string, title?: string, image?: string, description?: string) => void;
  closeProjectDetails: () => void;
}

const ProjectDetailsContext = createContext<ProjectDetailsContextType | undefined>(undefined);

export const useProjectDetails = () => {
  const context = useContext(ProjectDetailsContext);
  if (!context) {
    throw new Error('useProjectDetails must be used within a ProjectDetailsProvider');
  }
  return context;
};

interface ProjectDetailsProviderProps {
  children: ReactNode;
}

export function ProjectDetailsProvider({ children }: ProjectDetailsProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [projectSlug, setProjectSlug] = useState('');
  const [projectTitle, setProjectTitle] = useState<string | undefined>(undefined);
  const [projectImage, setProjectImage] = useState<string | undefined>(undefined);
  const [projectDescription, setProjectDescription] = useState<string | undefined>(undefined);

  const openProjectDetails = (slug: string, title?: string, image?: string, description?: string) => {
    setProjectSlug(slug);
    setProjectTitle(title);
    setProjectImage(image);
    setProjectDescription(description);
    setIsOpen(true);
  };

  const closeProjectDetails = () => {
    setIsOpen(false);
  };

  return (
    <ProjectDetailsContext.Provider value={{ openProjectDetails, closeProjectDetails }}>
      {children}
      <ProjectDetailsSlider
        isOpen={isOpen}
        onClose={closeProjectDetails}
        projectSlug={projectSlug}
        projectTitle={projectTitle}
        projectImage={projectImage}
        projectDescription={projectDescription}
      />
    </ProjectDetailsContext.Provider>
  );
}
