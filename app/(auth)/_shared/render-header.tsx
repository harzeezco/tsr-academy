import { Button } from '@shared/index';

import { HeadContent } from './head-content';

export function RenderHeader({
  firstStudent = 'Student',
  heading = 'Sign up and start learning',
  secondStudent = 'Student_1',
}: {
  firstStudent?: string;
  heading?: string;
  secondStudent?: string;
}) {
  return (
    <>
      <HeadContent heading={heading} />{' '}
      <div className='mb-7 flex gap-3'>
        <Button
          className='rounded-[5px] md:px-16'
          size='md'
          variant='orange'
        >
          {firstStudent}
        </Button>
        <Button
          className='rounded-[5px] md:px-16'
          size='md'
          variant='border'
        >
          {secondStudent}
        </Button>
      </div>
    </>
  );
}
