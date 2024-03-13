import Image from 'next/image';

import { Container } from '@landing-page/shared';

import { Card } from './card';

export type CourseDataProp = {
  alt: string;
  href: string;
  thumbnail: string;
  title: string;
};

export const courseData: CourseDataProp[] = [
  {
    thumbnail: 'cloud-devops.png',
    title: 'Cloud DevOps',
    alt: 'devops',
    href: '/devops',
  },
  {
    thumbnail: 'cloud-engineer.png',
    title: 'Cloud Engineering',
    alt: 'devops',
    href: '/cloud-computing',
  },
  {
    thumbnail: 'cyber-security.png',
    title: 'Cyber Security',
    alt: 'devops',
    href: '/waitlist',
  },
  {
    thumbnail: 'data-analytics.png',
    title: 'Data Analytics',
    alt: 'devops',
    href: '/waitlist',
  },
];

export function Courses() {
  const background =
    'radial-gradient(circle, #F2FDFF 0%, #F2FEFF 100%)';

  return (
    <Container
      as='section'
      className='py-14'
      style={{ background }}
      variant='outer'
    >
      <Container className='relative'>
        <h1 className='h1-bold70 relative mx-auto text-center text-green-900'>
          Explore Our{' '}
          <span className='text-green-700'>
            Easy to <br /> Consume
          </span>{' '}
          Courses
        </h1>

        <p className='mx-auto mt-3 max-w-[700px] text-center md:text-lg'>
          Our courses are taught by industry experts who bring
          real-world experience into every lesson.
        </p>

        <ul
          className='mx-auto mt-12 grid max-w-4xl gap-4 lg:grid-cols-2'
          id='courses'
        >
          {courseData.map((course) => (
            <Card key={course.title} course={course} />
          ))}
        </ul>

        <Image
          alt='courses'
          className='absolute right-0 top-0 opacity-15'
          height={120}
          src='/images/courses-star2.png'
          width={120}
        />

        <Image
          alt='courses'
          className='absolute right-32 top-32 opacity-15'
          height={35}
          src='/images/courses-star.png'
          width={35}
        />
      </Container>
    </Container>
  );
}
