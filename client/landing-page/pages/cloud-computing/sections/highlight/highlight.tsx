'use client';

import Image from 'next/image';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';

import { Button } from '@shared/index';

import { Container } from '@landing-page/shared';

const Benefit = [
  {
    title:
      'Acquire knowledge in DevOps practices for superior scalability and streamlined processes.',
    description:
      "Feel like you're stuck in tech's ever-evolving race? Jump ahead with TSR Learning's Cloud Engineering Program, where we turn confusion into clarity and skills into opportunities.",
  },
  {
    title:
      'Master leading cloud technologies, including AWS and Azure.',
    description:
      "You're not just learning theories—you're getting your hands dirty with actual tools like AWS, Azure, and GCP.",
  },
];

export function HighLight() {
  return (
    <Container
      as='section'
      className='px-4 py-14 lg:px-7'
      variant='outer'
    >
      <div className='max-w-[1000px] mx-auto'>
        <h1 className='h1bold text-center'>
        Mastering the Cloud:{' '}
        <span className='text-green-700'>A Strategic Edge</span>
      </h1>

      <p className='mt-2 max-w-[700px] md:text-lg mx-auto text-center text-balance'>
        Elevate your tech abilities with TSR Learning&apos;s Cloud
        Computing Bootcamp, crafted to refine your capabilities in
        creating robust, scalable, and efficient applications using
        the powerhouses of the cloud industry, Microsoft Azure, and
        AWS.
      </p>

      <div className='mt-10 grid grid-cols-[1.2fr_0.8fr] items-center gap-2 max-sm:grid-cols-1'>
        <div className='flex flex-col gap-3 rounded-[16px] bg-white'>
          {Benefit.map(({ description, title }, idx) => (
            <div
              key={idx}
              className='highlight-grid relative rounded-[18px] bg-[#E6FDFF] px-5 pb-7 pt-5'
            >
              <h2 className='mb-2 text-xl md:text-2xl'>{title}</h2>
              <p className='max-w-[470px]'>{description}</p>
            </div>
          ))}
        </div>
        <div className='grid max-w-[400px] place-items-center rounded-[16px] bg-[#E6FDFF] px-4 pt-4'>
          <Image
            alt='bootcamp'
            className='h-[300px]'
            height={350}
            src='/icons/deploy.svg'
            width={500}
          />

          <h2 className='my-3 text-lg text-dark-900 md:text-2xl'>
            Gain skills in cloud infrastructure design,
            implementation, and fine-tuning.
          </h2>
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
      </div>
    </Container>
  );
}
