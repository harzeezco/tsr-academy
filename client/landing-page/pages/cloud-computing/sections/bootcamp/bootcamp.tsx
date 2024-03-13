'use client';

import Image from 'next/image';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';

import { Button } from '@shared/index';

import { Container } from '@landing-page/shared';

const Benefit = [
  {
    icon: 'check.svg',
    title: 'Expert Instructors',
    description: 'Learn from the best in the field of web design',
  },
  {
    icon: 'check.svg',
    title: 'Practical Assignments',
    description: 'Learn from the best in the field of web design',
  },
  {
    icon: 'check.svg',
    title: 'Lifetime Access',
    description:
      'Learn at your own pace. Once enrolled, access the course material forever.',
  },
  {
    icon: 'check.svg',
    title: 'Certification',
    description: 'Learn from the best in the field of web design',
  },
];

export function BootCamp() {
  return (
    <Container
      as='section'
      className='px-4 py-14 lg:px-7'
      style={{
        background:
          'radial-gradient(circle, #F2FEFF 0%, #F2FEFF 100%)',
      }}
      variant='outer'
    >
      <h1 className='h1bold max-w-xl'>
        Cloud Computing BootCamp Overview
      </h1>

      <p className='mt-2 max-w-[650px] md:text-lg'>
        Gain the expertise to architect, implement, and manage cloud
        solutions in TSR Learning&apos;s intensive bootCamp. This
        program combines self-guided video modules, interactive live
        sessions with seasoned professionals, hands-on labs, and
        collaborative projects. Plus, TSR Learning offers
        comprehensive job support to help you transition into your
        cloud career.
      </p>

      <div className='mt-14 grid grid-cols-1 gap-4 lg:grid-cols-[0.8fr_1fr]'>
        <div className='rounded-[16px] bg-white p-4'>
          <div className='flex size-14 items-center justify-center rounded-full bg-[#E7F9FB]'>
            <Image
              alt='bootcamp'
              height={25}
              src='/icons/check.svg'
              width={25}
            />
          </div>

          <h2 className='my-3 text-xl font-semibold text-dark-900'>
            Interactive Modules
          </h2>
          <p className='mb-5 max-w-[300px]'>
            Engage with content that&apos;s both informative and
            interesting
          </p>

          <Image
            alt='bootcamp'
            height={500}
            src='/images/bootcamp-chart.png'
            width={500}
          />
        </div>
        <div className='grid grid-cols-2 gap-3 rounded-[16px] bg-white p-4 max-sm:grid-cols-1'>
          {Benefit.map(({ description, icon, title }, idx) => (
            <div
              key={idx}
              className='rounded-[18px] border-[1.5px] border-solid border-[#99DDE4] p-3'
            >
              <div className='flex size-14 items-center justify-center rounded-full bg-[#E7F9FB]'>
                <Image
                  alt={title}
                  height={25}
                  src={`/icons/${icon}`}
                  width={25}
                />
              </div>

              <h2 className='my-3 text-xl font-semibold text-dark-900'>
                {title}
              </h2>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-11 flex flex-col items-center gap-4'>
        <Link href='#enrol'>
          <Button
            className='py-3 text-lg font-semibold'
            size='sm'
            variant='gradientSecondary'
          >
            Let’s Book Your Seat
          </Button>
        </Link>

        <div className='flex items-center gap-2'>
          <StarRatings
            name='rating'
            numberOfStars={5}
            rating={4.7}
            starDimension='20px'
            starRatedColor='orange'
            starSpacing='2px'
          />

          <span>4.7</span>
        </div>
      </div>
    </Container>
  );
}
