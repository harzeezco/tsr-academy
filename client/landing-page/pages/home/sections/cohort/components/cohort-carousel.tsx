'use client';

import * as React from 'react';
import Particles from '@tsparticles/react';
import Autoplay from 'embla-carousel-autoplay';
import { useRouter } from 'next/navigation';

import { Button } from '@shared/index';

import { Container } from '@landing-page/shared';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@landing-page/shared/components/carousel';
import { useParticles } from '@landing-page/shared/hooks/use-particles';

import { CohortData } from '../data/data';

export function CohortCarousel() {
  const { init, options } = useParticles();

  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true }) as any,
  );

  const navigate = useRouter();

  return (
    <div className='relative'>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {CohortData.map(
            (
              {
                backgroundImage,
                button,
                description,
                gradient,
                heading,
                href,
                paddingBottom,
                paddingTop,
                title,
              },
              index,
            ) => (
              <CarouselItem
                key={index}
                className='grid place-items-center rounded-[2vw]'
                style={{
                  background: `url(/images/${backgroundImage}), ${gradient}`,
                  paddingBottom,
                  paddingTop,
                }}
              >
                {init && (
                  <Particles
                    className='absolute left-0 top-0 size-full'
                    id={`carousel-item-${index}-particles`}
                    options={options}
                  />
                )}
                <Container className='cohort-grid relative z-[40]'>
                  <button
                    disabled
                    className='mb-5 cursor-not-allowed rounded-[30px] border border-solid border-gray-300 bg-white px-5 py-1 text-blue-700'
                    type='button'
                  >
                    ✦ {title}
                  </button>

                  <div
                    dangerouslySetInnerHTML={{ __html: heading }}
                    className='h1-bold70 mx-auto md:max-w-[900px]'
                  />
                  <p className='mx-auto mt-4 max-w-[700px] md:text-lg'>
                    {description}
                  </p>

                  <div className='mx-auto mt-10 flex items-center justify-center gap-4 max-md:flex-col md:gap-10'>
                    <Button
                      className='relative z-[9999] text-lg'
                      size='lg'
                      variant='orange'
                      onClick={() => navigate.push(href)}
                    >
                      {button}
                    </Button>
                  </div>

                  <div className='flex items-center justify-center gap-5 max-lg:mt-14'>
                    <CarouselPrevious className='!left-[70px] lg:absolute' />
                    <CarouselNext className='!right-[70px] lg:absolute' />
                  </div>
                </Container>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
