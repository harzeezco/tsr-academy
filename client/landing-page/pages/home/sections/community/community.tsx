'use client';

import { easeInOut, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Container } from '@landing-page/shared';

export function Online() {
  return (
    <div className='absolute right-5 top-4 flex size-4 items-center justify-center'>
      <span className='relative flex size-4'>
        <span className='absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75' />
        <span className='relative inline-flex size-4 rounded-full bg-emerald-500' />
      </span>
    </div>
  );
}

const containerVariants = {
  hidden: {
    scale: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.5,
      when: 'beforeChildren',
    },
  },
};

const childVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

export function Community() {
  const container = React.useRef<HTMLDivElement>(null);

  const isInView = useInView(container, { once: true });
  const background =
    'radial-gradient(circle, #EDF0F7 0%, #F2F3FF 100%)';

  return (
    <Container
      as='section'
      className='py-20'
      style={{ background }}
      variant='outer'
    >
      <Container>
        <h1 className='h1-bold70 max-w-4xl text-center text-green-900'>
          <span className='text-orange-700'>Learn</span> from,{' '}
          <span className='text-orange-700'>Engage</span> and{' '}
          <span className='text-orange-700'>Network</span> with Tech
          Executives
        </h1>
        <p className='mx-auto mt-3 max-w-[700px] text-center md:text-lg'>
          Learn, share the knowledge with community members and shine
          from wherever you’re through our online learning webapp.
        </p>

        <div ref={container}>
          {isInView && (
            <motion.div
              animate='visible'
              className='map relative mt-20'
              exit='exit'
              initial='hidden'
              variants={containerVariants}
            >
              <motion.div variants={childVariants}>
                <motion.div
                  animate='visible'
                  className='relative'
                  exit='exit'
                  initial='hidden'
                  variants={containerVariants}
                >
                  <motion.div
                    className='absolute left-3 top-72 z-[9999] object-cover md:top-20'
                    variants={childVariants}
                  >
                    <div className='relative'>
                      <Image
                        alt='box'
                        className='max-w-[130px]'
                        height={147}
                        quality={100}
                        src='/images/dark-green-box.png'
                        width={154}
                      />

                      <div className='absolute right-[-10%] top-[-20%]'>
                        <div className='relative'>
                          <Image
                            alt='box'
                            className=''
                            height={130}
                            quality={100}
                            src='/images/community/barbie.png'
                            width={130}
                          />

                          <Online />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className='absolute left-[35%] z-[9999] -translate-x-1/2 object-cover  max-sm:left-[25%] max-sm:top-1/2'
                    variants={childVariants}
                  >
                    <div className='relative'>
                      <Image
                        alt='box'
                        className='max-sm:w-[200px]'
                        height={300}
                        quality={100}
                        src='/images/orange-box.png'
                        width={300}
                      />

                      <div className='absolute left-1/2 top-[-10%] -translate-x-1/2'>
                        <div className='relative'>
                          <Image
                            alt='box'
                            height={130}
                            quality={100}
                            src='/images/community/john.png'
                            width={130}
                          />

                          <Online />
                        </div>
                      </div>

                      <div className='absolute bottom-[5%] left-1/2 -translate-x-1/2'>
                        <div className='relative'>
                          <Image
                            alt='box'
                            height={130}
                            quality={100}
                            src='/images/community/sandra.png'
                            width={130}
                          />

                          <Online />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className='absolute right-0 top-64 z-[9999] object-cover md:right-14 md:top-32'
                    variants={childVariants}
                  >
                    <Image
                      alt='box'
                      className='max-w-[130px]'
                      height={147}
                      quality={100}
                      src='/images/blue-box.png'
                      width={154}
                    />

                    <div className='absolute top-[-20%] max-md:right-[-30px] md:left-[-20%]'>
                      <div className='relative'>
                        <Image
                          alt='box'
                          height={130}
                          quality={100}
                          src='/images/community/grace.png'
                          width={130}
                        />

                        <Online />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className='absolute -bottom-16 left-[10%] z-[9999] md:bottom-0'
                variants={childVariants}
              >
                <div className='relative'>
                  <Image
                    alt='box'
                    height={130}
                    quality={100}
                    src='/images/community/meda.png'
                    width={130}
                  />

                  <Online />
                </div>
              </motion.div>

              <motion.div
                className='absolute bottom-0 left-[50%] z-[9999]'
                variants={childVariants}
              >
                <div className='relative'>
                  <Image
                    alt='box'
                    height={130}
                    quality={100}
                    src='/images/community/anita.png'
                    width={130}
                  />

                  <Online />
                </div>
              </motion.div>

              <motion.div
                className='absolute z-[9999] max-sm:left-[5%] max-sm:top-[30%] md:bottom-[15%] md:right-[10%] lg:right-[20%]'
                variants={childVariants}
              >
                <div className='relative'>
                  <Image
                    alt='box'
                    height={130}
                    quality={100}
                    src='/images/community/zeez.png'
                    width={130}
                  />

                  <Online />
                </div>
              </motion.div>

              <motion.div variants={childVariants}>
                <Image
                  alt='star'
                  className='absolute bottom-0 left-0 md:bottom-32'
                  height={30}
                  quality={100}
                  src='/images/blue-star.png'
                  width={30}
                />
              </motion.div>

              <motion.div variants={childVariants}>
                <Image
                  alt='star'
                  className='absolute right-0 top-0 md:right-7 md:top-7'
                  height={58}
                  quality={100}
                  src='/images/star-darkblue.png'
                  width={58}
                />
              </motion.div>

              <motion.div variants={childVariants}>
                <Image
                  alt='star'
                  className='absolute bottom-0 right-0 md:bottom-7 md:right-7'
                  height={30}
                  quality={100}
                  src='/images/star-orange.png'
                  width={30}
                />
              </motion.div>

              <motion.div variants={childVariants}>
                <Image
                  alt='star'
                  className='absolute left-0 top-0 md:left-[20%] md:top-7'
                  height={30}
                  quality={100}
                  src='/images/star-orange.png'
                  width={30}
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </Container>
    </Container>
  );
}
