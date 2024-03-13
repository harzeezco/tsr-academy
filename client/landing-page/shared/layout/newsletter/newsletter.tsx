'use client';

import * as React from 'react';
import Particles from '@tsparticles/react';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Button } from '@shared/index';

import { useParticles } from '@landing-page/shared/hooks/use-particles';

import { InputBox } from '@admin/shared';

import { Container } from '../container';

const emailSchema = z
  .string()
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: 'Please, Enter a valid email address',
  })
  .min(5);

export function NewsLetter() {
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

      fetch('/api/newsletter', options)
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
          toast.error(error.message);
        });

      console.log('Email is valid:', email);
    } else {
      toast.error(result.error.errors[0].message);
    }

    console.log(result);
  }

  return (
    <Container
      className='CTA cohort-grid relative rounded-[2vw] py-20 text-white'
      style={{}}
      variant='outer'
    >
      {init && (
        <Particles
          className='absolute left-0 top-0 size-full'
          id='newsletter-particles'
          options={options}
        />
      )}
      <Container className='w-full max-w-[780px]  justify-center text-center'>
        <button
          disabled
          className='mb-5 w-fit cursor-not-allowed rounded-[30px] border border-solid border-gray-300 bg-white px-5 py-1 text-blue-700'
          type='button'
        >
          Community
        </button>

        <h1 className='h1-bold70 mx-auto'>Join Our Newsletter</h1>
        <p className='mx-auto mt-4 max-w-[700px] md:text-lg'>
          Be part of an ever-growing network of tech enthusiasts and
          professionals. Share, learn, and grow with peers and mentors
          committed to your success.
        </p>

        <div className='relative z-[999] mx-auto max-w-md'>
          <InputBox
            className='!rounded-[100px] bg-white'
            inputClassName='bg-white rounded-[100px] placeholder:text-[#666D80] text-dark-900'
            placeholder='Your Email'
            renderInner={() => (
              <Button
                className='absolute right-0 top-0 h-full rounded-r-[100px] px-7 font-semibold'
                variant='lightOrange'
                onClick={() => onSubmit()}
              >
                Join Now
              </Button>
            )}
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </Container>
    </Container>
  );
}
