'use client';

import * as React from 'react';

type CourseContextProps = {
  activeCourseInfo: number;
  activeModule: string;
  isOpen: boolean;
  setActiveCourseInfo: React.Dispatch<React.SetStateAction<number>>;
  setActiveModule: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CourseContext = React.createContext<CourseContextProps>({
  activeModule: '',
  activeCourseInfo: 1,
  setActiveCourseInfo: () => {},
  setActiveModule: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

export function CourseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeModule, setActiveModule] = React.useState('text');
  const [activeCourseInfo, setActiveCourseInfo] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({
      activeModule,
      setActiveModule,
      activeCourseInfo,
      setActiveCourseInfo,
      isOpen,
      setIsOpen,
    }),
    [
      activeModule,
      setActiveModule,
      activeCourseInfo,
      setActiveCourseInfo,
      isOpen,
      setIsOpen,
    ],
  );

  return (
    <div>
      <CourseContext.Provider value={value}>
        {children}
      </CourseContext.Provider>
    </div>
  );
}

export function useCourse() {
  const context = React.useContext(CourseContext);

  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }

  return context;
}
