'use client';

import Image from 'next/image';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';

import { Button } from '@shared/index';

import { Container } from '@landing-page/shared';

const BenefitList = [
  {
    title: 'Practical Insights and Actionable Tactics',
    description:
      'Gain access to real-world tools and documents, including templates for cybersecurity proposals and presentations that have been effectively used in high-stake industry projects.',
  },
  {
    title: '8-Week Intensive Mentorship from Cybersecurity Experts',
    description:
      'Enhance your cybersecurity skills with direct guidance from industry veterans. Experience interactive, live sessions and personalised feedback throughout the program, ensuring a deep, practical understanding of cybersecurity concepts.',
  },
];

export function Benefit() {
  return (
    <Container
      as='section'
      className='mt-8 px-4 py-14 lg:px-7'
      style={{
        background: 'linear-gradient( #F2F3FF 0%, #EDF0F7 100%)',
      }}
      variant='outer'
    >
      <div className='mx-auto max-w-[1000px]'>
        <h1 className='h1bold'>Why DevOps Engineering?</h1>

        <div className='mt-5 grid grid-cols-1 items-center gap-2 lg:grid-cols-2'>
          <div className='grid place-items-center rounded-[16px] bg-white px-4 py-5'>
            <h2 className='mb-3 text-xl text-dark-900 md:text-3xl'>
              In-Demand Skillset
            </h2>
            <p className='mx-auto mb-3 max-w-sm text-center'>
              With the tech industry’s rapid growth, DevOps experts are
              in high demand to optimize project lifecycles and improve
              product quality.
            </p>
            <Image
              alt='bootcamp'
              className='imac'
              height={308}
              src='/images/imac.png'
              width={340}
            />
          </div>

          <div className='flex flex-col gap-5 rounded-[16px]'>
            {BenefitList.map(({ description, title }, idx) => (
              <div
                key={idx}
                className='highlight-grid relative rounded-[18px] bg-white p-5'
              >
                <h2 className='mb-2 text-xl text-dark-900 md:text-3xl'>
                  {title}
                </h2>
                <p className='max-w-[470px]'>{description}</p>
              </div>
          ))}
          </div>
        </div>
      </div>

      <div className='mt-11 flex flex-col items-center gap-4'>
        <Link href='#enrol'>
          <Button
            className='py-3 text-lg font-semibold'
            size='sm'
            variant='primary'
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
