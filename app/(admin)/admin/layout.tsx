'use client';

import { Header, LeftSidebar } from 'client/admin';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { cn } from '@shared/index';

function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main className='grid grid-cols-[auto_1fr]'>
      <aside className='sticky inset-y-0 left-0 h-screen min-w-[230px] border-r-[1.5px] border-solid border-[#F5F5F7] py-6'>
        <LeftSidebar />
      </aside>

      <div
        className={cn(
          pathname.includes('courses')
            ? 'bg-[#F2F2F2]'
            : 'bg-transparent',
          'px-6',
        )}
      >
        <Header />
        {children}
      </div>
    </main>
  );
}

export default Layout;
