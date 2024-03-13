import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@landing-page/shared/components/carousel';

const TestimonialData = [
  {
    src: 'testimonial-student.png',
    description:
      'My name is Juliet Ebili. TSR Learning has shaped and  enable me to be on a fast track.One good thing about the classes is that you have mentor who are ready to help you, draw from their wealth of and their payment plan is topnotch.',
    person: 'Juliet Ebili - Co Founder of Ocean LLC',
  },
  {
    src: 'testimonial-student.png',
    description:
      'My name is Juliet Ebili. TSR Learning has shaped and  enable me to be on a fast track.One good thing about the classes is that you have mentor who are ready to help you, draw from their wealth of and their payment plan is topnotch.',
    person: 'Juliet Ebili - Co Founder of Ocean LLC',
  },
  {
    src: 'testimonial-student.png',
    description:
      'My name is Juliet Ebili. TSR Learning has shaped and  enable me to be on a fast track.One good thing about the classes is that you have mentor who are ready to help you, draw from their wealth of and their payment plan is topnotch.',
    person: 'Juliet Ebili - Co Founder of Ocean LLC',
  },
];

export function TestimonialCarousel() {
  return (
    <div className='relative z-[99999]'>
      <Carousel>
        <CarouselContent>
          {TestimonialData.map(
            ({ description, person, src }, index) => (
              <CarouselItem key={index} className='relative z-[9999]'>
                <article className='relative mt-7 grid place-items-center gap-10 md:gap-20 lg:mt-7 lg:grid-cols-[250px_1fr] lg:px-7'>
                  <div className='relative max-sm:h-[168px] max-sm:w-[128px]'>
                    <Image
                      alt='A student looking Happy'
                      className='rounded-[149px] max-sm:h-[168px] max-sm:w-[128px]'
                      height={250}
                      src={`/images/${src}`}
                      width={340}
                    />

                    <Image
                      alt='Quote'
                      className='absolute -right-1 top-4 max-sm:top-1 max-sm:h-[40px] max-sm:w-[30px] md:-right-3'
                      height={70}
                      src='/images/blue-quote.png'
                      width={70}
                    />
                  </div>
                  <div>
                    <blockquote className='text-xl leading-7 md:text-2xl md:leading-[33px]'>
                      {description}
                    </blockquote>

                    <p className='mt-5 flex items-center gap-2 text-[15px] font-semibold md:text-[17px]'>
                      <Image
                        alt='line'
                        height={5}
                        src='/icons/line-author.svg'
                        width={25}
                      />{' '}
                      {person}
                    </p>

                    <div className='mt-10 items-center justify-end gap-4 md:mt-14 md:flex'>
                      <CarouselPrevious className='!size-12 from-[#024BA5] to-[#105DBD] transition-all hover:border-none hover:bg-gradient-to-r hover:text-white disabled:bg-transparent max-sm:absolute max-sm:!left-[0px] max-sm:!-translate-y-48' />
                      <CarouselNext className='!size-12 from-[#024BA5] to-[#105DBD] transition-all hover:border-none hover:bg-gradient-to-r hover:text-white disabled:!bg-transparent max-sm:absolute max-sm:!right-[0px] max-sm:!-translate-y-48' />
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
