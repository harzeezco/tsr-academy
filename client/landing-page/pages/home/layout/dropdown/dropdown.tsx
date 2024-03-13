import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@shared/index';

type CardType = {
  href: string;
  src: string;
  title: string;
};

export type CourseType = {
  content: CardType[];
  type: string;
};

const Courses: CourseType[] = [
  {
    type: 'Courses',
    content: [
      {
        src: 'course.png',
        title: 'DevOps Essentials',
        href: '/devops',
      },
      {
        src: 'devops.png',
        title: 'Cloud Computing Fundamentals',
        href: '/cloud-computing',
      },
    ],
  },
];

const WaitListCourses: CourseType[] = [
  {
    type: 'WaitList Courses',
    content: [
      {
        src: 'course/security.png',
        title: 'Cyber Security',
        href: '/waitlist',
      },
      {
        src: 'course/analytics.png',
        title: 'Data Analytics',
        href: '/waitlist',
      },
    ],
  },
];

export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (idx: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + idx * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'linear',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

function Card({ href, idx, src, title }: CardType & { idx: number }) {
  return (
    <motion.li
      animate='enter'
      custom={idx}
      exit='exit'
      initial='initial'
      variants={perspective}
    >
      <Link href={href}>
        <div className='grid cursor-pointer grid-cols-[100px_1fr] items-center gap-3 rounded-[10px] bg-gray-100 p-3 hover:bg-gray-200'>
          {' '}
          <Image
            alt='load'
            className='h-[70px] w-[100px] rounded-[10px]'
            height={200}
            src={`/images/${src}`}
            width={100}
          />
          <h4
            className='line-clamp-2 text-xl font-medium leading-6 !text-dark-900'
            title={title}
          >
            {title}
          </h4>
        </div>
      </Link>
    </motion.li>
  );
}

export function Dropdown({ isShow }: { isShow: boolean }) {
  return (
    <div
      aria-hidden={!isShow}
      className='relative z-[99999] grid grid-cols-2 gap-4 rounded-xl p-7'
    >
      <div>
        {Courses.map(({ content, type }, idx) => (
          <li key={type} className='items-center gap-1'>
            <h3 className='mb-3 text-lg leading-6'>{type} →</h3>
            <div
              className={cn(
                'grid gap-y-4 gap-x-5',
                idx === 0 && 'border-e-2 pr-5 border-gray-300',
              )}
            >
              {content.map((item, idx) => (
                <Card key={item.href} idx={idx} {...item} />
              ))}
            </div>
          </li>
        ))}
      </div>

      <div>
        {WaitListCourses.map(({ content, type }) => (
          <li key={type} className='items-center gap-1'>
            <h3 className='mb-3 text-lg leading-6'>{type} →</h3>
            <div className={cn('grid gap-y-4 gap-x-5')}>
              {content.map((item, idx) => (
                <Card key={item.href} idx={idx} {...item} />
              ))}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
