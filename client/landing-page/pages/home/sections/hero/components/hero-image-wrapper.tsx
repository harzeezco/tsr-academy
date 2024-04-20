'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { CardItem } from '../data/data';
import { Card } from './card';

const ScaleChildren = {
  initial: {
    scale: 0,
  },
  animate: (idx: number) => ({
    scale: 1,
    transition: {
      type: 'spring',
      delay: 0.4 + idx * 0.1,
      stiffness: 400,
      damping: 40,
    },
  }),
};

export function HeroImageWrapper() {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <div className='right-0 top-0 flex-col items-center sm:hidden lg:absolute lg:flex'>
      <div className='relative'>
        <Image
          alt='A student smiling'
          className='w-full max-lg:max-w-[550px] lg:h-[595px] xl:h-[645px] 2xl:!h-[768px] 2xl:!w-[620px]'
          height={500}
          quality={100}
          src='/images/hero-student.png'
          width={550}
          onLoad={() => setIsShow(true)}
        />

        <AnimatePresence>
          {isShow && (
            <ul className='gap-4 max-lg:bottom-0 max-lg:hidden md:-left-32 md:top-[60%] lg:absolute lg:grid'>
              {CardItem.map((item, idx) => (
                <motion.li
                  key={item.title[idx]}
                  animate='animate'
                  custom={idx}
                  initial='initial'
                  variants={ScaleChildren}
                >
                  <Card {...item} zIdx={idx % 2 === 0} />
                </motion.li>
              ))}
            </ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
