import Image from 'next/image';
import { ReactNode } from 'react';

export function Auth({ children }: { children: ReactNode }) {
  return (
    <section className='flex min-h-screen items-center justify-center gap-7'>
      {children}

      <div className='sticky inset-y-0 right-0 h-screen max-lg:hidden'>
        <Image
          alt='Student feeling happy'
          className='!h-full max-w-[600px] flex-1 object-cover'
          height={400}
          src='/images/student-auth.webp'
          width={640}
        />
      </div>
    </section>
  );
}
