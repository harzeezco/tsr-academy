import { Container } from '@landing-page/shared';
import { InfiniteMovingCards } from '@landing-page/shared/components/infinite-moving-cards';
import { companyLogos } from '@landing-page/shared/data/data';

export function GraduateWorkplace() {
  return (
    <Container
      as='section'
      className='pt-14 text-center'
      variant='outer'
    >
      <Container>
        <h1 className='star h1-bold70 relative text-dark-900'>
          Where Our <span className='text-blue-700'>Graduates</span> Work.
        </h1>

        <p className='mx-auto mt-3 max-w-[700px] md:text-lg'>
          Irrespective of your chosen niche, we provide you with an
          unfair advantage over your competitors in the global tech
          market that sets you up for a successful career.
        </p>
      </Container>

      <div
        className='mt-10 flex gap-10 rounded-[2vw] px-4 py-5'
        style={{
          background: 'linear-gradient(to right, #024ba5, #105dbd)',
        }}
      >
        <InfiniteMovingCards
          direction='right'
          items={companyLogos as typeof companyLogos}
          speed='normal'
        />
      </div>
    </Container>
  );
}
