import { Container } from '@landing-page/shared';

import { InfiniteMovingCards } from './component/infinite-moving-cards';

const skills = [
  {
    title: 'Identity and Access Management',
  },
  {
    title: 'Containerization and Orchestration',
  },
  {
    title: 'Containerization and Orchestration',
  },
  {
    title: 'Multi Cloud Deployment',
  },
  {
    title: 'Infrastructure as Code',
  },
  {
    title: 'Continuous Delivery',
  },
  {
    title: 'Cloud cost Optimization',
  },
  {
    title: 'Continuous Integration',
  },
  {
    title: 'Disaster Recovery',
  },
  {
    title: 'Continuous Integration',
  },
];

export function SkillCovered() {
  const firstRow = skills.slice(0, 3);
  const secondRow = skills.slice(3, 6);
  const thirdRow = skills.slice(6, 10);

  return (
    <Container
      className='py-14 lg:px-7'
      style={{
        background: 'linear-gradient(to right, #024ba5, #105dbd)',
      }}
      variant='outer'
    >
      <h1 className='h1bold text-center text-white'>
        Skills Covered in this Bootcamp
      </h1>

      <div className='mt-7'>
        <InfiniteMovingCards
          direction='right'
          items={firstRow as typeof firstRow}
          speed='fast'
        />

        <InfiniteMovingCards
          direction='left'
          items={secondRow as typeof secondRow}
          speed='fast'
        />

        <InfiniteMovingCards
          direction='right'
          items={thirdRow as typeof thirdRow}
          speed='fast'
        />
      </div>
    </Container>
  );
}
