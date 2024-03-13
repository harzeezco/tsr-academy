import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

import { Button, cn } from '@shared/index';

import {
  CourseModule,
  ModuleProps,
} from '@admin/courses/components/course-module';
import { PopOver } from '@admin/courses/components/pop-over';
import { SplitBtn } from '@admin/courses/components/split-btn';
import { options } from '@admin/courses/data/data';
import { useRequiredFields } from '@admin/courses/store/use-required-fields';

type CurriculumProps = {
  id: number;
  isOpen: boolean;
  module: ModuleProps[];
  name: string;
};

const Curriculum: CurriculumProps[] = [
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
    name: 'Wireframing - Low Fidelity',
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
];

export function CourseCurriculum() {
  const [curriculum, setCurriculum] = React.useState(Curriculum);
  const setActiveCourse = useRequiredFields(
    (state) => state.setActiveCourseOptions,
  );
  const activeCourse = useRequiredFields(
    (state) => state.activeCourseOptions,
  );

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
    <div className='mt-10'>
      <ul>
        {curriculum.map((lecture) => (
          <li className='mb-6 rounded-[10px] border-2 border-solid border-[#F4F3F4]'>
            <div
              className={cn(
                'flex items-center justify-between gap-3 p-3',
                lecture.isOpen
                  ? 'border-b-2 border-solid border-[#F4F3F4]'
                  : '',
              )}
              role='button'
              tabIndex={0}
              onClick={() => handleQuestion(lecture.id)}
              onKeyDown={() => handleQuestion(lecture.id)}
            >
              <div className='flex items-center gap-2'>
                {lecture.isOpen ? (
                  <ChevronDown className='text-dark-900' />
                ) : (
                  <ChevronUp className='text-dark-900' />
                )}
                <h3 className='text-lg font-semibold text-dark-900'>
                  {lecture.name}
                </h3>
              </div>

              <PopOver
                otherContentClassName='w-[180px]'
                renderTrigger={() => (
                  <button
                    aria-label='More options'
                    className='grid size-10 place-items-center rounded-full bg-[#EFEFEF]'
                    type='button'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      alt=''
                      height={25}
                      src='/icons/dots.svg'
                      width={25}
                    />
                  </button>
                )}
              >
                <p>Review Courses</p>
                <p>Edit courses</p>
              </PopOver>
            </div>
            <div
              className={cn(
                lecture.isOpen
                  ? 'opacity-100 visible mt-5'
                  : '!h-0 opacity-0 invisible overflow-hidden',
                'transition-all flex flex-col gap-2',
              )}
            >
              <ul className='flex flex-col gap-5 transition-all'>
                {lecture.module.map((module) => (
                  <CourseModule hasEdit {...module} />
                ))}
              </ul>

              <div className='flex gap-6 py-3 pl-4'>
                <SplitBtn btnText='New Lesson' options={options} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className='flex'>
        <Button
          className='mr-5 rounded-[100px] py-3'
          size='slate'
          type='reset'
          variant='slateBg'
        >
          Cancel
        </Button>
        <Button
          className='rounded-[100px] px-7'
          type='submit'
          onClick={() => setActiveCourse(activeCourse + 1)}
        >
          Proceed To Course Pricing
        </Button>
      </div>
    </div>
  );
}
