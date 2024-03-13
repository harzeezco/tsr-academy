import Image from 'next/image';

import { cn } from '@shared/index';

import { useRequiredFields } from '@admin/courses/store/use-required-fields';

type CourseFieldsProps = {
  icon: string;
  id: number;
  label: string;
};

const courseFields: CourseFieldsProps[] = [
  {
    label: 'Course Information',
    icon: 'book-open.svg',
    id: 1,
  },
  {
    label: 'Course Curriculum',
    icon: 'book-open.svg',
    id: 4,
  },
  {
    label: 'Pricing',
    icon: 'stack.svg',
    id: 5,
  },
];

export function CourseFields() {
  const activeCourse = useRequiredFields(
    (state) => state.activeCourseOptions,
  );

  const requiredFields = courseFields.length;

  return (
    <div className='rounded-[16px] bg-white p-4'>
      <ul className='flex items-center gap-20'>
        {courseFields.map(({ icon, id, label }, idx) => (
          <li
            key={label}
            className={cn(
              activeCourse - (idx + 1) > idx || activeCourse === id
                ? 'opacity-100'
                : 'opacity-60',
              'flex gap-5',
            )}
          >
            <div className='flex size-14 items-center justify-center rounded-full bg-blue-700'>
              <Image
                alt=''
                height={30}
                src={`/icons/${icon}`}
                width={30}
              />
            </div>

            <div>
              <p className='text-blue-700'>
                Step {`${idx + 1}/${requiredFields}`}
              </p>
              <h4 className='text-lg font-medium text-dark-900'>
                {label}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
