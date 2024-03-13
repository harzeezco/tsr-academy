import Image from 'next/image';

import { cn } from '@shared/index';

import { CardType } from '../../data';

export function Card({
  coverBackground,
  desc,
  label = '',
  layoutType,
  src,
}: CardType & { layoutType?: 'reverse' | 'default' }) {
  const background = `url('/images/${coverBackground}'), #FFF7EC`;

  return (
    <article
      className={cn(
        'grid items-center justify-between gap-10 rounded-[20px] p-3 md:gap-12 md:p-7  lg:flex-row',
        layoutType === 'default'
          ? 'lg:grid-cols-[1.1fr_0.9fr]'
          : 'lg:grid-cols-[0.9fr_1.1fr]',
      )}
      style={{
        background,
        backgroundSize: 'cover',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <h3 className='text-xl font-medium text-orange-700 md:text-3xl'>
          {label}
        </h3>
        <p className='mt-3 xl:text-lg'>{desc}</p>
      </div>

      <div
        className={cn(
          layoutType === 'default'
            ? 'lg:order-last'
            : 'lg:order-first',
        )}
      >
        <Image
          alt='load'
          className='w-full rounded-[20px] object-cover'
          height={400}
          src={`/images/${src}`}
          width={600}
        />
      </div>
    </article>
  );
}
