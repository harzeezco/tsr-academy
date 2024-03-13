'use client';

import Image from 'next/image';

import useCounter from '@shared/hooks/use-counter';

import { Container } from '@landing-page/shared';

export function Growth() {
  const { counter1, counter2, counter3, observe } = useCounter();
  const background = 'linear-gradient(#00AABB, #08808C)';

  return (
    <Container
      as='section'
      className='px-4 py-16 text-white md:px-10'
      style={{ background }}
      variant='outer'
    >
      <article
        className='border-b-2 border-solid
        border-[#00C6D4] pb-10'
      >
        <Image
          alt='quote'
          height={25}
          src='/icons/quote.svg'
          width={25}
        />

        <blockquote className='mt-3 max-w-5xl text-xl font-bold md:text-4xl'>
          Demand for cloud computing experts is growing rapidly with a
          23.1% year-over-year increase in the past 12 months. The
          typical turnover rate for employees with these skills is
          42%, which indicates a positive career outlook for cloud
          professionals.
        </blockquote>
      </article>

      <div
        ref={observe}
        className='mt-10 grid gap-5 gap-y-8 p-4 md:grid-cols-2 lg:grid-cols-3'
      >
        <div className=''>
          <Image
            alt='trophy'
            height={35}
            src='/icons/trophy.svg'
            width={35}
          />

          <p className='my-3 text-2xl font-semibold md:text-4xl lg:text-6xl'>
            $
            <span ref={counter1} data-value='500'>
              500
            </span>
            B
          </p>
          <p className='mb-1 text-xl font-medium'>
            The estimate public Cloud spending in 2023
          </p>
          <span>source: Market Research</span>
        </div>

        <div className=''>
          <Image
            alt='trophy'
            height={35}
            src='/icons/tel.svg'
            width={35}
          />

          <p className='my-3 text-2xl font-semibold md:text-4xl lg:text-6xl'>
            $
            <span ref={counter2} data-value='130'>
              130
            </span>
            K
          </p>
          <p className='mb-1 text-xl font-medium'>
            The average annual salary of a cloud computing
            professional in the US
          </p>
          <span>source: Glassdoor</span>
        </div>

        <div className=''>
          <Image
            alt='trophy'
            height={35}
            src='/icons/settings.svg'
            width={35}
          />

          <p className='my-3 text-2xl font-semibold md:text-4xl lg:text-6xl'>
            <span ref={counter3} data-value='19'>
              19
            </span>
            .1<span className='text-xl text-[#99DDE4]'>%</span>CAGR
          </p>
          <p className='mb-1 text-xl font-medium'>
            Expected between 2023 and 2028
          </p>
          <span>source: Business Wire</span>
        </div>
      </div>
    </Container>
  );
}
