import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@shared/index';

import { Container } from '@landing-page/shared';

export default function BlogDetails() {
  return (
    <Container
      className='grid grid-cols-1 gap-7 p-4 lg:grid-cols-[auto_1fr]'
      style={{
        background: 'radial-gradient(#F2F3FF 20%, #EDF0F7)',
      }}
      variant='outer'
    >
      <div className='row-span-2 mt-8 max-w-[300px] max-lg:order-2'>
        <div className='rounded-[16px] bg-[#E7F9FB] p-3 py-5'>
          <h3 className='text-xl font-bold text-[#00828F] md:text-2xl'>
            Would like to learn with us?
          </h3>
          <p className='pt-2 leading-7 '>
            Explore our courses specifically crafted to take you from
            zero to expert!c
          </p>

          <div className='mt-4 flex justify-center'>
            <Button
              className='flex items-center gap-3 px-14 py-3 text-lg font-semibold'
              size='sm'
              variant='gradientSecondary'
            >
              Enrol Now <ArrowUpRight className='text-white' />
            </Button>
          </div>
        </div>

        <h3>share:</h3>
      </div>
      <div className='mt-8'>
        <h3 className='font-bold capitalize leading-10 sm:text-[2.9rem] sm:leading-[50px] lg:text-[3.5vw] lg:leading-[54px]'>
          5 Key Trends Shaping the Future of Cybersecurity in 2024
        </h3>
        <p className='mt-2'>January 24, 2023</p>
        <div className='mt-4'>
          <Image
            alt='cover image'
            height={467}
            src='/images/cover-image.png'
            width={1000}
          />
          <p className='text-[18px]  leading-[35px]'>
            Ideas and solutions can be iterated to create better ones
            over time. Sharing experiences, discussing mistakes, and
            eventually learning from them will help you gain
            experience and confidence much faster. Which (hopefully)
            will result if diminishing your fear of making mistakes.
            At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal
            and project level.
          </p>
        </div>
        <div>
          <h3 className=''>Solution</h3>
          <p className='text-[18px] leading-[35px]'>
            Ideas and solutions can be iterated to create better ones
            over time. Sharing experiences, discussing mistakes, and
            eventually learning from them will help you gain
            experience and confidence much faster. Which (hopefully)
            will result if diminishing your fear of making mistakes.
            At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal
            and project level.
          </p>
        </div>
        <div>
          <h3 className=''>Solution</h3>
          <p className='text-[18px] leading-[35px]'>
            Ideas and solutions can be iterated to create better ones
            over time. Sharing experiences, discussing mistakes, and
            eventually learning from them will help you gain
            experience and confidence much faster. Which (hopefully)
            will result if diminishing your fear of making mistakes.
            At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal
            and project level.
          </p>
        </div>
        <div>
          <img alt='' src='' />
          <h3 className=''>Solution</h3>
          <p className='text-[18px] leading-[35px]'>
            Ideas and solutions can be iterated to create better ones
            over time. Sharing experiences, discussing mistakes, and
            eventually learning from them will help you gain
            experience and confidence much faster. Which (hopefully)
            will result if diminishing your fear of making mistakes.
            At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal
            and project level.
          </p>
        </div>
        <div>
          <h3 className=''>Solution</h3>
          <p className='text-[18px] leading-[35px]'>
            Ideas and solutions can be iterated to create better ones
            over time. Sharing experiences, discussing mistakes, and
            eventually learning from them will help you gain
            experience and confidence much faster. Which (hopefully)
            will result if diminishing your fear of making mistakes.
            At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal
            and project level.
          </p>
        </div>
      </div>
    </Container>
  );
}
