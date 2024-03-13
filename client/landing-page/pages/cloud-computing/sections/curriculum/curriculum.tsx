'use client';

import * as React from 'react';
import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';

import { Button, cn } from '@shared/index';

import { Container } from '@landing-page/shared';

import {
  CourseModule,
  ModuleProps,
} from '@admin/courses/components/course-module';

type CurriculumProps = {
  id: number;
  isOpen: boolean;
  module: ModuleProps[];
  name: string;
};

const courses: CurriculumProps[] = [
  {
    name: 'Introduction, Introduction, Introduction',
    id: 1,
    isOpen: false,
    module: [
      {
        title: 'Getting started with Figma training',
        minutes: '02:53',
        type: 'embed',
      },
      {
        title: 'What is Figma for & does it do the coding?',
        minutes: '02:53',
        type: 'video',
      },
    ],
  },
  {
    name: 'Introduction to DevOps.',
    id: 2,
    isOpen: false,
    module: [
      {
        title: 'Getting started with Figma training',
        minutes: '02:53',
        type: 'file',
      },
    ],
  },
  {
    name: 'Linux Operating systems and handling.',
    id: 3,
    isOpen: false,
    module: [
      {
        title: 'Getting started with Figma training',
        minutes: '02:53',
        type: 'file',
      },
    ],
  },
  {
    name: 'Linux scripting and task automation.',
    id: 4,
    isOpen: false,
    module: [
      {
        title: 'Getting started with Figma training',
        minutes: '02:53',
        type: 'file',
      },
    ],
  },
  {
    name: 'Linux scripting and task automation.',
    id: 5,
    isOpen: false,
    module: [
      {
        title: 'Getting started with Figma training',
        minutes: '02:53',
        type: 'file',
      },
    ],
  },
  {
    name: 'And many more',
    id: 6,
    isOpen: false,
    module: [
      {
        title: 'Getting started with Figma training',
        minutes: '02:53',
        type: 'file',
      },
    ],
  },
];

export function Curriculum() {
  const [curriculum, setCurriculum] = React.useState(courses);

  const handleQuestion = (id: number) => {
    setCurriculum((prev) =>
      prev.map((options) =>
        options.id === id
          ? { ...options, isOpen: !options.isOpen }
          : { ...options },
      ),
    );
  };

  return (
    <Container
      className='px-4 py-14 lg:px-7'
      style={{
        background:
          'url(/images/learning-path.png), linear-gradient(#00AABB, #08808C)',
        backgroundSize: 'cover',
      }}
      variant='outer'
    >
      <h1 className='mb-5 text-center text-4xl text-white md:text-6xl'>
        Learning Path
      </h1>

      <p className='mx-auto w-full max-w-[800px] text-balance text-center text-white'>
        Our Cloud Computing Bootcamp covers a broad range of topics
        including cloud platform analysis, application migration,
        performance testing, load balancing, autoscaling, identity
        access management, storage and DR, multicloud deployment,
        database management, and more
      </p>

      <div className='mt-10 rounded-[24px] bg-[#E7F9FB]'>
        <ul>
          {curriculum.map((lecture) => (
            <li className='mb-3 rounded-[10px]'>
              <div
                className={cn(
                  'flex items-center justify-between gap-3 p-3 md:px-7',
                  lecture.isOpen
                    ? 'border-b-2 border-solid border-[#E7F9FB]'
                    : '',
                )}
                role='button'
                tabIndex={0}
                onClick={() => handleQuestion(lecture.id)}
                onKeyDown={() => handleQuestion(lecture.id)}
              >
                <h3 className='text-lg font-semibold text-dark-900'>
                  {lecture.name}
                </h3>

                <button
                  className='grid place-items-center rounded-full p-1'
                  style={{
                    background: 'linear-gradient(#00AABB, #08808C)',
                  }}
                  type='button'
                >
                  {lecture.isOpen ? (
                    <Minus className='text-white' />
                  ) : (
                    <Plus className='text-white' />
                  )}
                </button>
              </div>
              <div
                className={cn(
                  lecture.isOpen
                    ? 'opacity-100 visible mt-2'
                    : '!h-0 opacity-0 invisible overflow-hidden',
                  'transition-all flex flex-col gap-2',
                )}
              >
                <ul className='flex flex-col'>
                  {lecture.module.map((module) => (
                    <CourseModule
                      className='bg-transparent shadow-none'
                      hasEdit={false}
                      {...module}
                    />
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-10 flex justify-center'>
        <Link href='#enrol'>
          <Button
            className='border border-[#E7F9FB] text-[#08808C] transition-all hover:bg-[#218d98] hover:text-white active:scale-95'
            variant='getStarted'
          >
            Get Started Now
          </Button>
        </Link>
      </div>
    </Container>
  );
}
