
import React from 'react';
import { createContext, useContext, useState } from 'react';

interface Interview {
    id:string;
    jobType: string;
    language: string;
    difficulty:number;
    createdAt: Date | string;
}
interface InterviewContextType {
    currentInterview: Interview | null;
    allInterviews: Interview[];
    startInterview: (interview: Omit<Interview, 'id' | 'createdAt'>) => void;
    finishInterview: () => void;
}


//Create the Context(container for the state)
const InterviewContext = createContext<InterviewContextType | undefined>(undefined);

export const useInterview = () => {
    const context = useContext(InterviewContext);//if interview data is not found in the Provider, it will return undefined
    //if context is undefined, it means that the hook is used outside of the Provider
    if (!context) {
        throw new Error('useInterview must be used within an InterviewProvider');
    }
    return context;
};


// Create the Provider component
export const InterviewProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentInterview, setCurrentInterview] = useState<Interview | null>(null);
  const [allInterviews, setAllInterviews] = useState<Interview[]>([]);

  // Funktion för att starta ny intervju
  const startInterview = (data: Omit<Interview, 'id' | 'createdAt'>) => {
    const newInterview: Interview = {
      ...data,
      id: Math.random().toString(36).substr(2, 9), // Enkel ID-generation
      createdAt: new Date()
    };
    
    setCurrentInterview(newInterview);
    setAllInterviews(prev => [...prev, newInterview]);
  };

  
  const finishInterview = () => {
    setCurrentInterview(null);
  };

  return React.createElement(
    InterviewContext.Provider,
    {
      value: {
        currentInterview,
        allInterviews,
        startInterview,
        finishInterview
      }
    },
    children
  );
};