'use client';

import Image from 'next/image';
import Link from 'next/link';

import { CourseDataProp } from './courses';

export function Card({ course }: { course: CourseDataProp }) {
  const getCourseDetails = course || {};
  const { alt, href, thumbnail, title } = getCourseDetails;

  return (
    <Link href={href}>
      <li
        key={title}
        className='relative rounded-2xl transition-all after:rounded-2xl  after:bg-[rgba(0,0,0,0.3)] after:transition-all after:content-[""] after:hover:absolute after:hover:inset-y-0 after:hover:left-0 after:hover:size-full active:scale-85 after:active:absolute'
      >
        <Image
          alt={alt}
          className='w-full'
          height={150}
          src={`/images/${thumbnail}`}
          width={450}
        />

        <h1 className='absolute left-5 top-3 text-nowrap text-xl font-semibold leading-6 text-white md:text-2xl'>
          {title}
        </h1>

        <Image
          alt='arrow-right'
          className='absolute bottom-4 right-5'
          height={20}
          src='/icons/course-direction.svg'
          width={35}
        />
      </li>
    </Link>
  );
}
