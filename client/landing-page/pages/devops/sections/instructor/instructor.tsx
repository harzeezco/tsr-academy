import Image from 'next/image';

import { Container } from '@landing-page/shared';

export function Instructor() {
  return (
    <Container
      className='px-3 py-14 lg:px-7'
      variant='outer'
    >
      <h1 className='h1bold whitespace-nowrap text-center'>
        Meet Your Instructor
      </h1>

      <div className='mx-auto mt-10 grid max-w-[1000px] grid-cols-1 items-center gap-20 max-md:gap-y-7 lg:grid-cols-[1.4fr_0.6fr]'>
        <div className='max-lg:order-1'>
          <article className='p-5 xl:p-7'>
            <h2 className='text-[24px] text-dark-900 md:text-3xl'>
              JOHN DOE
            </h2>
            <p className='mt-2 font-semibold text-[#A9A9A9] md:text-lg'>
              Senior Cloud Engineer | MSc | PhD
            </p>

            <blockquote className='mt-4 md:text-lg'>
              Lorem ipsum dolor sit amet consectetur. Id enim id quam adipiscing suscipit sem odio enim. Metus gravida nulla eu ac molestie. Tristique gravida risus semper egestas ut vulputate libero. Leo odio eget tristique diam. Nullam euismod fringilla turpis pretium etiam nisl diam. Cursus auctor sagittis libero quisque. Fermentum sit commodo aliquam leo amet mollis. elementum.
            </blockquote>
          </article>

        </div>
        <div className='flex justify-center'>
          <Image
            alt='instructor'
            height={330}
            src='/images/instructor.png'
            width={312}
          />
        </div>
      </div>
    </Container>
  );
}
