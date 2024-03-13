import {
  BootCamp,
  Curriculum,
  FAQ,
  Growth,
  Hero,
  HighLight,
  Instructor,
  Pricing,
  RoadMap,
  SkillCovered,
  StudentWorkplace,
  Testimonials,
} from '@landing-page/pages/cloud-computing';

function CloudComputing() {
  return (
    <main className='px-4 max-lg:px-3'>
      <Hero />
      <StudentWorkplace />
      <BootCamp />
      <HighLight />
      <Instructor />
      <SkillCovered />
      <Curriculum />
      <Testimonials />
      <RoadMap />
      <Growth />
      <Pricing />
      <FAQ />
    </main>
  );
}

export default CloudComputing;
