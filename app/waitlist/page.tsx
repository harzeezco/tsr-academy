'use client';

import * as React from 'react';
import Particles from '@tsparticles/react';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Button } from '@shared/index';

import { Header } from '@landing-page/pages/home';
import { Container, Footer } from '@landing-page/shared';
import { useParticles } from '@landing-page/shared/hooks/use-particles';

import { InputBox } from '@admin/shared';

import { Courses } from './courses';

const emailSchema = z
  .string()
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: 'Please, Enter a valid email address',
  })
  .min(5);

export default function WaitList() {
  const [email, setEmail] = React.useState('');
  const { init, options } = useParticles();

  function onSubmit() {
    if (!email) {
      toast.error('Please, enter an email address');

      return;
    }

    const result = emailSchema.safeParse(email);

    if (result.success) {
      const data = { email };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      fetch('/api/waitlist', options)
        .then((response) => {
          if (response.ok) {
            toast.success('Email sent successfully');
          } else {
            toast.error('Error sending email');
          }

          return response.json();
        })
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          toast.error(error?.message || 'An error occurred');
        });

      console.log('Email is valid:', email);
    } else {
      toast.error(result.error?.errors?.[0]?.message || 'Invalid email');
    }

    console.log(result);
  }

  return (
    <main className='max-md:px-4'>
      <Container
        style={{
          background:
            'url(/images/under-image.png), linear-gradient(to right, #FFAF38, #FF9800)',
        }}
        variant='outer'
      >
        {init && (
          <Particles
            className='absolute left-0 top-0 size-full'
            id='waitlist-particles'
            options={options}
          />
        )}
        <Container className='cohort-grid relative pb-20 text-center text-white'>
          <div className='mb-12'>
            <Header navColor btnType='primary' />
          </div>

          <h1 className='h1-bold70 mx-auto md:max-w-[800px]'>
            Don&apos;t Miss Your Chance to Be Part of{' '}
            <span className='text-blue-700'>
              Our Next Success Story!
            </span>
          </h1>

          <p className='mx-auto mt-4 max-w-[700px] md:text-lg'>
            We understand your eagerness to embark on your learning
            journey with TSR Learning. While our current cohort is in
            full swing, this moment offers a unique opportunity for
            you.
          </p>

          <div className='relative z-[10] mx-auto max-w-md'>
            <InputBox
              className='!rounded-[100px] bg-white'
              inputClassName='bg-white rounded-[100px] placeholder:text-[#666D80] text-dark-900'
              placeholder='Your Email'
              renderInner={() => (
                <Button
                  className='absolute right-0 top-0 h-full rounded-r-[100px] bg-blue-700 px-4 font-medium lg:px-7 lg:font-semibold'
                  variant='lightOrange'
                  onClick={() => onSubmit()}
                >
                  Join Waitlist
                </Button>
              )}
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <p className='mx-auto mt-4 max-w-sm text-center text-blue-700'>
            Get free access to exclusive preparatory material worth
            $2000 when you join waitlist
          </p>
        </Container>
      </Container>

      <Courses />
      <Footer />
    </main>
  );
}
