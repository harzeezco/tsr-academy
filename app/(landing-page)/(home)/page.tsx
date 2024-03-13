import {
  About,
  Cohort,
  Community,
  Courses,
  FAQ,
  GraduateWorkplace,
  Testimonials,
} from '@landing-page/pages/home';

function Home() {
  return (
    <>
      <Cohort />
      <GraduateWorkplace />
      <Courses />
      <About />
      <Testimonials />
      <FAQ />
      <Community />
    </>
  );
}

export default Home;
