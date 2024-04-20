'use client';

import Particles from '@tsparticles/react';
import Link from 'next/link';

import { Button, Logo } from '@shared/index';

import { Container } from '@landing-page/shared';
import { useParticles } from '@landing-page/shared/hooks/use-particles';

export function Hero() {
  const { init, options } = useParticles();

  return (
    <Container
      className='relative'
      style={{
        background:
          'url(/images/under-image.png), linear-gradient(to right, #024ba5, #105dbd)',
      }}
      variant='outer'
    >
      {init && (
        <Particles
          className='absolute left-0 top-0 size-full'
          id='devops-particles'
          options={options}
        />
      )}
      <Container className='relative z-[99999] py-10 pt-6 text-center text-white'>
        <div className='mb-10 flex items-center justify-between max-sm:mb-16'>
          <Logo isWhite />

          <Link href='#enrol'>
            <Button
              className='max-sm:px-5'
              size='sm'
              variant='orange'
            >
              Enrol Now
            </Button>
          </Link>
        </div>

        <button
          disabled
          className='mb-5 cursor-not-allowed rounded-[30px] border border-solid border-gray-300 bg-white px-5 py-1 text-blue-700'
          type='button'
        >
          ✦ COHORT I
        </button>

        <h1 className='h1-bold70 mx-auto md:max-w-[900px]'>
          Become an Industry-Ready{' '}
          <span className='text-orange-700'>DevOps</span> Expert
        </h1>

        <p className='mx-auto mt-4 max-w-[700px] md:text-lg'>
          Join our immersive DevOps Engineering Program and gain the
          skills to streamline software development and deployment
          processes. In this hands-on program, you’ll learn the art
          and science of improving efficiency, enhancing deployment
          frequency, and achieving faster time to market.
        </p>
      </Container>
    </Container>
  );
}
