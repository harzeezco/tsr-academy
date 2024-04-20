import { Container } from '@landing-page/shared';
import { InfiniteMovingCards } from '@landing-page/shared/components/infinite-moving-cards';
import { companyLogos } from '@landing-page/shared/data/data';

export function StudentWorkplace() {
  return (
    <Container
      className='pt-10'
      variant='outer'
    >
      <h1 className='h1bold text-center text-dark-900 md:pl-7'>
        Where Our <span className='text-[#08808C]'>Graduates</span>{' '}
        Work.
      </h1>

      <p className='mx-auto mb-4 mt-3 max-w-[700px] text-center md:pl-7 md:text-lg'>
        Irrespective of your chosen niche, we provide you with an
        unfair advantage over your competitors in the global tech
        market that sets you up for a successful career.
      </p>

      <div
        className='flex gap-10 rounded-[2vw] px-4 py-7'
        style={{
          background: 'linear-gradient(to right, #00AABB, #08808C)',
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
