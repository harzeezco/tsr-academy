import Image from 'next/image';

import {
  Benefit,
  Curriculum,
  FAQ,
  Growth,
  Hero,
  Instructor,
  Pricing,
  RoadMap,
  StudentWorkplace,
  Testimonials,
  TopicCovered,
} from '@landing-page/pages/devops';
import { Container } from '@landing-page/shared';

function Devops() {
  return (
    <main>
      <Hero />
      <Container
        className='relative z-50'
        variant='outer'
      >
        <Image
          alt='demo video'
          className='mx-auto mt-3'
          height={530}
          src='/images/devops-video-demo.png'
          width={1000}
        />
      </Container>
      <StudentWorkplace />
      <Benefit />
      <Instructor />
      <TopicCovered />
      <Curriculum />
      <Testimonials />
      <RoadMap />
      <Growth />
      <Pricing />
      <FAQ />
    </main>
  );
}

export default Devops;
