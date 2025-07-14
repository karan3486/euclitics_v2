'use client';

import React, { useState, useRef } from 'react';
import { Container } from '@/src/components/container';
import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import { Button } from '@/src/components/button';
import { toast } from 'sonner';

// Custom styles for the moving gradient animation
const gradientAnimation = `
  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
  }
`;

export default function CareersPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [coverLetterType, setCoverLetterType] = useState<'text' | 'file'>('text');
  
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const coverLetterInputRef = useRef<HTMLInputElement>(null);

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleCoverLetterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverLetterFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    // For now, we'll just show a success message
    
    toast.success('Application submitted successfully! We will contact you if your profile matches our requirements.');
    
    // Reset form
    setFullName('');
    setEmail('');
    setPhone('');
    setPosition('');
    setCoverLetter('');
    setResumeFile(null);
    setCoverLetterFile(null);
    setCoverLetterType('text');
    
    if (resumeInputRef.current) resumeInputRef.current.value = '';
    if (coverLetterInputRef.current) coverLetterInputRef.current.value = '';
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: gradientAnimation }} />
      <MainHeader version="1" />
      <div className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-2xl font-bold text-center md:text-2xl bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x">Careers at Euclitics</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-lg text-accent-700 dark:text-accent-300">
                Join our team of innovative professionals and help shape the future of technology solutions. 
                At Euclitics, we value creativity, dedication, and a passion for excellence.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x">Current Opportunities</h2>
              <p>
                We&apos;re always looking for talented individuals to join our growing team. Even if you don&apos;t 
                see a specific position that matches your skills, we encourage you to submit your resume for 
                future opportunities.
              </p>
              
              <ul className="list-disc pl-6 my-4">
                <li>Full Stack Developer</li>
                <li>Generative AI Machine Learning Engineer</li>
                <li>SEO Specialist</li>
                <li>React Native Developer</li>
                <li>Salesforce Developer</li>
                <li>DevOps Engineer</li>


              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x">Why Work With Us?</h2>
              <ul className="list-disc pl-6 my-4">
                <li>Competitive compensation and benefits</li>
                <li>Flexible work arrangements</li>
                <li>Continuous learning and development opportunities</li>
                <li>Collaborative and innovative work environment</li>
                <li>Work on cutting-edge technologies and projects</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-accent-900 dark:to-blue-950 p-6 rounded-lg shadow-md border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md animate-gradient-x">Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-accent-700 dark:border-accent-600"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-accent-700 dark:border-accent-600"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-accent-700 dark:border-accent-600"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium mb-2">
                      Position of Interest *
                    </label>
                    <input
                      type="text"
                      id="position"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      required
                      placeholder="e.g., Full Stack Developer"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-accent-700 dark:border-accent-600"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium mb-2">
                    Resume (PDF) *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    ref={resumeInputRef}
                    onChange={handleResumeChange}
                    accept=".pdf"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-accent-700 dark:border-accent-600"
                  />
                  {resumeFile && (
                    <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                      File selected: {resumeFile.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Cover Letter</label>
                  <div className="flex items-center space-x-4 mb-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={coverLetterType === 'text'}
                        onChange={() => setCoverLetterType('text')}
                        className="form-radio"
                      />
                      <span className="ml-2">Type Cover Letter</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={coverLetterType === 'file'}
                        onChange={() => setCoverLetterType('file')}
                        className="form-radio"
                      />
                      <span className="ml-2">Upload PDF</span>
                    </label>
                  </div>
                  
                  {coverLetterType === 'text' ? (
                    <textarea
                      id="coverLetter"
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      rows={6}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-accent-700 dark:border-accent-600"
                    />
                  ) : (
                    <div>
                      <input
                        type="file"
                        id="coverLetterFile"
                        ref={coverLetterInputRef}
                        onChange={handleCoverLetterFileChange}
                        accept=".pdf"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-accent-700 dark:border-accent-600"
                      />
                      {coverLetterFile && (
                        <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                          File selected: {coverLetterFile.name}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center">
                  <Button type="submit" className="px-8 py-3 rounded-full">
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-accent-700 dark:text-accent-300">
                If you have any questions about our hiring process or available positions, 
                please contact us at <a href="mailto:careers@euclitics.com" className="text-primary hover:underline">careers@euclitics.com</a>
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
