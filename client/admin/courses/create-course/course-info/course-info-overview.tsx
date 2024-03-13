import { Plus } from 'lucide-react';
import Image from 'next/image';

import { useRequiredFields } from '@admin/courses/store/use-required-fields';

import { CourseHeader } from '../course-header';

export function CourseInfoOverview() {
  const setActiveCourse = useRequiredFields(
    (state) => state.setActiveCourseOptions,
  );
  const activeCourse = useRequiredFields(
    (state) => state.activeCourseOptions,
  );

  return (
    <div className='mt-7 rounded-[20px] border-[1.5px] border-solid border-[#F4F3F4] bg-white px-10 !pb-10 pt-7'>
      <CourseHeader submitText='Publish' />

      <div className='mt-7 grid place-items-center gap-1 rounded-[20px] border-[1.5px] border-solid border-[#F4F3F4] p-6 !pb-8'>
        <Image
          alt='student illustration'
          height={112}
          src='/images/illustration.png'
          width={180}
        />

        <h4 className='mt-1 text-lg font-semibold text-dark-900'>
          Your lessons will appear here
        </h4>
        <p className='font-medium text-gray-290'>
          This is where you’ll create and manage your lessons
        </p>

        <button
          className='mt-3 flex items-center gap-2 rounded-[10px] border-[1.5px] border-solid border-gray-290 px-4 py-2 text-[15px] font-semibold text-[#21222A] transition-all hover:bg-[#F5F5F7] focus:bg-[#F5F5F7]'
          type='button'
          onClick={() => setActiveCourse(activeCourse + 1)}
        >
          <Plus className='size-6 text-gray-290' />
          New Course
        </button>
      </div>
    </div>
  );
}
