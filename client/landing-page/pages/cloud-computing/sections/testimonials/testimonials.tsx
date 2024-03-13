import { Container } from '@landing-page/shared';

import { TestimonialCarousel } from './components/carousel';

export function Testimonials() {
  return (
    <Container
      as='section'
      className='testimonial-grid relative py-14'
      style={{
        background:
          'radial-gradient(circle, #F2FDFF 0%, #F2FEFF 100%)',
      }}
      variant='outer'
    >
      <Container>
        <h1 className='h1-bold70 relative max-w-3xl text-center text-green-900'>
          Embark on your Career{' '}
          <span className='text-[#00828F]'>Success Journey</span>
        </h1>

        <TestimonialCarousel />
      </Container>
    </Container>
  );
}
