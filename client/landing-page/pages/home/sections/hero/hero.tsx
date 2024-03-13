import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@shared';

import { Container } from '@landing-page/shared';

import { ArrowImage } from './components/arrow-image';
import { HeroImageWrapper } from './components/hero-image-wrapper';

export function Hero() {
  return (
    <section>
      <Container className='items-center justify-between max-sm:!px-0 sm:pb-7 lg:flex lg:pb-[4.1rem] xl:pb-[4.3rem] xl:pl-14 2xl:pl-0'>
        <div className='relative mb-10 place-items-center pt-10 max-lg:grid max-lg:text-center max-md:px-4'>
          <h1 className='h1-bold60 relative max-w-[450px] xl:max-w-[550px] 2xl:max-w-[650px] 2xl:!text-7xl'>
            Unlock Your <br className='max-lg:hidden' /> Potential{' '}
            <span className='text-dark-900'>with</span> Accessible{' '}
            <span className='text-dark-900'>Tech Education</span>{' '}
            <ArrowImage />
          </h1>

          <p className='mb-5 mt-4 max-w-[500px] text-[17px] lg:max-w-[26rem] 2xl:text-lg'>
            Gain in-demand skills with TSR Learning, evolving from
            novice to industry-ready expert, no degree or prior tech
            experience required.
          </p>

          <Link href='#courses'>
            <Button
              aria-label='Discover Latest Courses'
              className='relative z-10 flex justify-center gap-2 rounded-[41px] max-md:w-full'
              size='md'
            >
              Discover Courses{' '}
              <Image
                alt='Load Course Page'
                height={20}
                src='/icons/circle.svg'
                width={20}
              />
            </Button>
          </Link>
        </div>

        <Image
          alt=''
          className='absolute left-1/2 top-1/2 h-full w-[80%] -translate-x-1/2 -translate-y-1/2'
          height={500}
          src='/images/hero-grid.png'
          width={700}
        />

        <HeroImageWrapper />
      </Container>
    </section>
  );
}
