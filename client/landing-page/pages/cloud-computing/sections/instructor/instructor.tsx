import Image from 'next/image';

import { Container } from '@landing-page/shared';

export function Instructor() {
  const background = 'radial-gradient(#FFFEF2 30%, #FFEFC8 )';

  return (
    <Container
      className='px-4 py-14 lg:px-7'
      style={{ backgroundImage: background }}
      variant='outer'
    >
      <h1 className='h1bold whitespace-nowrap text-center'>
        Meet Your Instructor
      </h1>

      <div className='mt-10 grid grid-cols-1 gap-4 max-md:gap-y-7 lg:grid-cols-[1.2fr_1fr]'>
        <div className='max-lg:order-1'>
          <article className='rounded-[30px] border border-[#FF9800] bg-white p-5 xl:p-7'>
            <h2 className='text-[24px] text-dark-900 md:text-3xl'>
              JOHN DOE
            </h2>
            <p className='mt-2 font-semibold text-[#A9A9A9] md:text-lg'>
              Senior Cloud Engineer | MSc | PhD
            </p>

            <blockquote className='mt-4 md:text-lg'>
              Lorem ipsum dolor sit amet consectetur. Id enim id quam
              adipiscing suscipit sem odio enim. Metus gravida nulla
              eu ac molestie. Tristique gravida risus semper egestas
              ut vulputate libero. Leo odio eget tristique diam.
              Nullam euismod fringilla turpis pretium etiam nisl diam.
              Cursus auctor sagittis libero quisque. Fermentum sit
              commodo aliquam leo amet mollis. Sagittis nec sed mattis
              a sed amet ac. Eu a lectus velit tortor etiam dolor
              fringilla. Ut lacinia posuere at neque et donec urna
              eget nulla. Amet rhoncus egestas erat erat purus
              eleifend.Amet rhoncus egestas erat erat purus eleifend.
            </blockquote>
          </article>

          <div
            className='mt-4 h-[100px] w-full rounded-[30px] max-lg:order-1 md:h-[110px]'
            style={{
              backgroundImage:
                'linear-gradient( to right, #FFAF38, #FF9800)',
            }}
          />
        </div>
        <div className='justify-center max-lg:flex'>
          <Image
            alt='instructor'
            height={500}
            src='/images/instructor.png'
            width={500}
          />
        </div>
      </div>
    </Container>
  );
}
