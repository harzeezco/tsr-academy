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
  SkillCovered,
  StudentWorkplace,
  Testimonials,
  TopicCovered,
} from '@landing-page/pages/devops';
import { Container } from '@landing-page/shared';

function Devops() {
  return (
    <main className='px-4 max-lg:px-3'>
      <Hero />
      <Container
        className='relative z-50 mt-[-9.2rem] max-sm:mt-[-6.5rem]'
        variant='outer'
      >
        <Image
          alt='demo video'
          className='mx-auto'
          height={530}
          src='/images/devops-demo.png'
          width={1000}
        />
      </Container>
      <StudentWorkplace />
      <Benefit />
      <Instructor />
      <SkillCovered />
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
