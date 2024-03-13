'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { UserAvatar } from '@shared';

function OverviewHeader({
  admin = 'Louis Benagha',
}: {
  admin?: string;
}) {
  return (
    <h1 className='text-3xl font-medium text-dark-400'>
      Hi, {admin}
    </h1>
  );
}

function MyCoursesHeader({
  heading = 'My Courses',
}: {
  heading?: string;
}) {
  return (
    <div>
      <h1 className='text-3xl font-medium text-dark-400'>
        {heading}
      </h1>
      <p className='max-w-md'>Create and manage your courses.</p>
    </div>
  );
}

function CreateCourseHeader({
  heading = 'Create New Course',
}: {
  heading?: string;
}) {
  return (
    <div>
      <h1 className='text-3xl font-medium text-dark-400'>
        {heading}
      </h1>
      <p className='max-w-md'>
        Make sure you have filled in all the necessary fields and have
        uploaded all the required files.
      </p>
    </div>
  );
}

const HeaderOptions = [
  { href: '/admin', Component: OverviewHeader },
  { href: '/admin/courses/my-courses', Component: MyCoursesHeader },
  {
    href: '/admin/courses/create-course',
    Component: CreateCourseHeader,
  },
];

export function Header() {
  const pathname = usePathname();

  const filteredComponent = HeaderOptions.filter(
    (component) => component.href === pathname,
  );

  return (
    <header className='flex justify-between py-4'>
      {filteredComponent.map(({ Component, href }) => (
        <Component key={href} />
      ))}

      <div className='flex items-center gap-8 self-start'>
        {pathname.includes('courses') && (
          <Image
            alt='search'
            height={25}
            src='/icons/search.svg'
            width={25}
          />
        )}

        <Image
          alt='notification'
          className='w-[25px] cursor-pointer'
          height={25}
          src='/icons/notification.svg'
          width={25}
        />

        <UserAvatar className='cursor-pointer' />
      </div>
    </header>
  );
}
