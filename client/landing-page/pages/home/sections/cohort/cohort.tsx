import { Container } from '@landing-page/shared';

import { CohortCarousel } from './components/cohort-carousel';

export function Cohort() {
  return (
    <Container
      as='section'
      className='relative !rounded-none text-center text-white'
      variant='outer'
    >
      <CohortCarousel />
    </Container>
  );
}
