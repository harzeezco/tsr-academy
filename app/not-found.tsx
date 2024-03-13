'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@shared/index';

export default function NotFound() {
  const navigate = useRouter();

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-2'>
      <Image
        alt='not found'
        height={170}
        src='/icons/not-found.svg'
        width={170}
      />
      <h1 className='h1bold'>Oops, Page not found.</h1>
      <p className='mb-4'>
        The requested URL you are looking for doesn’t exist on this
        server.
      </p>

      <Button
        size='sm'
        variant='primary'
        onClick={() => navigate.push('/')}
      >
        Back to Home
      </Button>
    </div>
  );
}
