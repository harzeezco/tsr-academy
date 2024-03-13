'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ArrowImage() {
  return (
    <motion.div
      animate={{ scale: 1 }}
      className='absolute -right-14 bottom-0 hidden lg:inline-block'
      initial={{ scale: 0 }}
      transition={{ duration: 0.4, ease: 'easeIn' }}
    >
      <Image
        alt='line pointing to available courses'
        className='!max-lg:h-[50px] bottom-0 right-5 max-lg:rotate-[90deg]'
        height={90}
        src='/icons/line.svg'
        width={170}
      />
    </motion.div>
  );
}
