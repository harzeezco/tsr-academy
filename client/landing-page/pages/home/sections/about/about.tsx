import { Container } from '@landing-page/shared';

import { AboutDetails } from '../../data';
import { Card } from './card';

export function About() {
  return (
    <Container
      as='section'
      className='py-14'
      variant='outer'
    >
      <Container className='grid place-items-center'>
        <h1 className='h1-bold70 relative mb-10 max-w-3xl text-center text-dark-900'>
          Guiding you to{' '}
          <span className='text-orange-700'>Start Your Career</span>{' '}
          Tech
        </h1>

        <div className='flex max-w-[950px] flex-col gap-7 rounded-3xl bg-[#F8F6F6] p-4'>
          {AboutDetails.map((details, idx) => (
            <Card
              key={details.label}
              {...details}
              layoutType={idx === 1 ? 'default' : 'reverse'}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}
