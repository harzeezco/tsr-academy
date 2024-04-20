import { Container } from '@landing-page/shared';

import { TestimonialCarousel } from './components/carousel';

export function Testimonials() {
  return (
    <Container
      as='section'
      className='relative pt-14 lg:pb-10'
      variant='outer'
    >
      <Container>
        <h1 className='h1-bold70 relative max-w-3xl text-center text-green-900'>
          Hear from{' '}
          <span className='text-green-700'>Our Successful</span>{' '}
          Learners
        </h1>

        <TestimonialCarousel />
      </Container>
    </Container>
  );
}
