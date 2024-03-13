import { Container } from '@landing-page/shared';

import { TestimonialCarousel } from './components/carousel';

export function Testimonials() {
  const background =
    'radial-gradient(circle, #F2F7FF 0%, #DFECFF 100%)';

  return (
    <Container
      as='section'
      className='testimonial-grid relative py-14'
      style={{ background }}
      variant='outer'
    >
      <Container>
        <h1 className='h1-bold70 relative max-w-3xl text-center text-green-900'>
          Embark on your Career{' '}
          <span className='text-blue-700'>Success Journey</span>
        </h1>

        <TestimonialCarousel />
      </Container>
    </Container>
  );
}
