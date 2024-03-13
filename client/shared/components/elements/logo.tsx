import Image from 'next/image';
import Link from 'next/link';

export function Logo({
  isWhite = false,
  src = '/icons/tsr-logo.svg',
}: {
  isWhite?: boolean;
  src?: string;
}) {
  return (
    <Link href='/'>
      <Image
        alt='tsr logo'
        height={45}
        src={isWhite ? '/icons/tsr-logo-white.svg' : src}
        width={112}
      />
    </Link>
  );
}
