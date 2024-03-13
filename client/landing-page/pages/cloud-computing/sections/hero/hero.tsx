'use client';

import Particles from '@tsparticles/react';
import Image from 'next/image';
import Link from 'next/link';

import { Button, Logo } from '@shared/index';

import { Container } from '@landing-page/shared';
import { useParticles } from '@landing-page/shared/hooks/use-particles';

export function Hero() {
  const { init, options } = useParticles();

  return (
    <Container
      className='relative pb-10'
      style={{
        background:
          'url(/images/under-image2.png), linear-gradient(to right, #00AABB, #08808C)',
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
      <Container className='relative z-[99999] py-10 text-center text-white'>
        <div className='mb-10 flex items-center justify-between'>
          <Logo isWhite />

          <Link href='#enrol'>
            <Button className='px-5' size='sm' variant='orange'>
              Enrol Now
            </Button>
          </Link>
        </div>

        <button
          disabled
          className='mb-5 cursor-not-allowed rounded-[30px] border border-solid border-gray-300 bg-white px-5 py-1 text-[#08808C]'
          type='button'
        >
          ✦ COHORT II
        </button>

        <h1 className='h1-bold70 mx-auto md:max-w-[900px]'>
          Become an Industry-Ready{' '}
          <span className='text-orange-700'>Cloud Computing</span>{' '}
          Expert
        </h1>

        <p className='mx-auto mt-4 max-w-[700px] md:text-lg'>
          Dive into the dynamic world of cybersecurity with TSR
          Learning. Whether you&apos;re starting out or scaling up,
          our program will equip you with the skills and knowledge to
          excel in this field. Gain hands-on experience working on
          real-world AWS and Azure cloud architecture and
          infrastructure projects
        </p>
      </Container>

      <div className='relative z-[9999]'>
        <Image
          alt='demo video'
          className='mx-auto'
          height={530}
          src='/images/demo.png'
          width={1000}
        />
      </div>
    </Container>
  );
}
