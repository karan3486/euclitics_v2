'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaSearch, FaGlobe, FaCog, FaTags } from 'react-icons/fa';
import { cn } from '@/src/utils/shadcn';
import { ProjectDetail, getProjectDetailsBySlug } from '@/data/project-section/project-details';
import { FaArrowLeft } from 'react-icons/fa6';

// Custom styles for the moving gradient animation
const gradientAnimation = `
  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
  }
  
  .gradient-underline {
    position: relative;
    display: inline-block;
  }
  
  .gradient-underline::after {
    content: '';
    position: absolute;
    left: 10%;
    bottom: 2px;
    height: 3px;
    width: 80%;
    border-radius: 50%;
    background: linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6);
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
    transform: scaleX(1) translateY(-1px);
    transform-origin: center;
    transition: all 0.3s ease-out;
  }
  
  .gradient-underline:hover::after {
    width: 90%;
    left: 5%;
    transform: scaleX(1.05) translateY(0);
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
  }
`;

interface ProjectDetailsSliderProps {
  isOpen: boolean;
  onClose: () => void;
  projectSlug: string;
  projectTitle?: string;
  projectImage?: string;
  projectDescription?: string;
}

export function ProjectDetailsSlider({
  isOpen,
  onClose,
  projectSlug,
  projectTitle,
  projectImage,
  projectDescription
}: ProjectDetailsSliderProps) {
  const [projectDetails, setProjectDetails] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [animationState, setAnimationState] = useState<'initial' | 'entering' | 'entered' | 'exiting'>('initial');
  
  // Control animation visibility and state
  useEffect(() => {
    if (isOpen) {
      // First make it visible but in the "off-screen" position
      setIsVisible(true);
      setAnimationState('initial');
      
      // Then after a tiny delay, trigger the animation to slide in
      const enterTimer = setTimeout(() => {
        setAnimationState('entering');
        
        // Mark as fully entered after animation completes
        const enteredTimer = setTimeout(() => {
          setAnimationState('entered');
        }, 300);
        
        return () => clearTimeout(enteredTimer);
      }, 50); // Small delay to ensure the initial state renders first
      
      return () => clearTimeout(enterTimer);
    } else {
      // Start exit animation
      setAnimationState('exiting');
      
      // Remove from DOM after animation completes
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this with the CSS transition duration
      
      return () => clearTimeout(exitTimer);
    }
  }, [isOpen]);

  // Get API URL for prefixing image paths
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    if (isOpen && projectSlug) {
      setLoading(true);
      // Get project details from our data
      const details = getProjectDetailsBySlug(projectSlug);
      
      // Override title and image if provided
      if (projectTitle || projectImage) {
        setProjectDetails({
          ...details,
          title: projectTitle || details.title,
          image: projectImage || details.image
        });
      } else {
        setProjectDetails(details);
      }
      
      setLoading(false);
    }
  }, [isOpen, projectSlug, projectTitle, projectImage]);

  // Handle escape key to close the slider
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when slider is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Always render when visible for animation purposes
  if ((!isOpen && !isVisible) || !projectDetails) return null;

  // Format image URL
  const imageUrl = projectImage?.startsWith('/') && !projectImage?.startsWith('/assets') 
    ? `${apiUrl}${projectImage}` 
    : projectDetails.image;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: gradientAnimation }} />
      <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Slider panel */}
      <div 
        className={cn(
          "relative w-full md:w-1/2 bg-white dark:bg-accent-900 h-full overflow-hidden shadow-xl transition-transform duration-300 ease-in-out transform flex flex-col pt-[60px] md:pt-0",
          animationState === 'initial' ? "translate-x-full" : 
          animationState === 'entering' || animationState === 'entered' ? "translate-x-0" : 
          "translate-x-full"
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-[70px] md:top-4 z-10 rounded-full bg-primary p-2 text-white shadow-md transition-colors hover:bg-primary/90"
        >
          <FaTimes className="h-5 w-5" />
        </button>

        {loading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Project title header - fixed at top */}
            <div className="bg-primary px-6 py-2 w-full flex-shrink-0">
              <h2 className="text-lg font-bold text-white md:text-xl">
                {projectDetails.title}
              </h2>
              {projectDescription ? (
                <p className="mt-1 text-white/90 text-sm">{projectDescription.substring(0, 120)}{projectDescription.length > 120 ? '...' : ''}</p>
              ) : projectDetails.overview && (
                <p className="mt-1 text-white/90 text-sm">{projectDetails.overview.substring(0, 120)}...</p>
              )}
            </div>
            
            {/* Scrollable content area */}
            <div className="flex-grow overflow-y-auto mt-2">
              {/* Project image */}
              <div className="w-full">
                <div className="relative aspect-video w-full">
                  <Image
                    src={imageUrl}
                    alt={projectDetails.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Project details */}
              <div className="p-6">
                {/* Service */}
                {projectDetails.service && (
                  <div className="mb-6 border-b pb-4">
                    <div className="mb-2 flex items-center">
                      <FaCog className="mr-2 h-5 w-5 text-primary" />
                      <h3 className="text-lg font-extrabold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x gradient-underline">Service</h3>
                    </div>
                    <p>{projectDetails.service}</p>
                  </div>
                )}

                {/* Categories */}
                {projectDetails.categories && projectDetails.categories.length > 0 && (
                  <div className="mb-6 border-b pb-4">
                    <div className="mb-2 flex items-center">
                      <FaTags className="mr-2 h-5 w-5 text-primary" />
                      <h3 className="text-lg font-extrabold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x gradient-underline">Categories</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.categories.map((category, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Technologies */}
                {projectDetails.technologies && projectDetails.technologies.length > 0 && (
                  <div className="mb-6 border-b pb-4">
                    <div className="mb-2 flex items-center">
                      <FaCog className="mr-2 h-5 w-5 text-primary" />
                      <h3 className="text-lg font-extrabold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x gradient-underline">Technologies</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.technologies.map((technology, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Overview */}
                {projectDetails.overview && (
                  <div className="mb-6 border-b pb-4">
                    <div className="mb-2 flex items-center">
                      <FaSearch className="mr-2 h-5 w-5 text-primary" />
                      <h3 className="text-lg font-extrabold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x gradient-underline">Overview</h3>
                    </div>
                    <p className="text-accent-700 dark:text-accent-300">
                      {projectDetails.overview}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                {projectDetails.keyFeatures && (
                  <div className="mb-6 border-b pb-4">
                    <div className="mb-2 flex items-center">
                      <span className="mr-2 text-primary">✨</span>
                      <h3 className="text-lg font-extrabold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x gradient-underline">{projectDetails.keyFeatures.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {projectDetails.keyFeatures.features.map((featureGroup, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4">
                          <h4 className="mb-2 font-medium">{featureGroup.title}</h4>
                          <ul className="list-inside list-disc space-y-1">
                            {featureGroup.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-accent-700 dark:text-accent-300">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact */}
                {projectDetails.impact && (
                  <div className="mb-6">
                    <div className="mb-2 flex items-center">
                      <FaGlobe className="mr-2 h-5 w-5 text-primary" />
                      <h3 className="text-lg font-extrabold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x gradient-underline">Impact</h3>
                    </div>
                    <p className="text-accent-700 dark:text-accent-300">
                      {projectDetails.impact}
                    </p>
                  </div>
                )}
                
                {/* Back button */}
                <div className="flex justify-start mt-8 mb-4">
                  <button
                    onClick={onClose}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  ><FaArrowLeft />
                    <span>Back to Projects</span>
                    
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}
