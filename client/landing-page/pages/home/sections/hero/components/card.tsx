import Image from 'next/image';

import useTextTyped from '@landing-page/shared/hooks/use-text-typing';

import { CardItemProps } from '../data/data';

export function Card({
  left,
  radius = '8px',
  rotate,
  src,
  title,
  zIdx,
}: {
  radius?: string;
  zIdx?: boolean;
} & CardItemProps) {
  const { typedSuperpower } = useTextTyped(title);

  return (
    <div
      className='relative grid w-[280px] grid-cols-[70px_1fr] items-center gap-1 bg-white p-2 shadow-md'
      style={{
        transform: rotate,
        borderRadius: radius,
        marginLeft: left,
        zIndex: zIdx ? 1 : 0,
      }}
    >
      <Image
        alt='load'
        height={50}
        src={`/images/${src}`}
        width={60}
      />
      <h4 className='h-[60px] font-medium'>{typedSuperpower}</h4>
    </div>
  );
}
