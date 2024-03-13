import { ReactNode } from 'react';

import { Header, Hero } from '@landing-page/pages/home';
import { Container } from '@landing-page/shared';

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='px-4'>
      <Container
        className='relative bg-blue-100 !px-0 2xl:pb-[4.3rem]'
        variant='outer'
      >
        <Header />
        <Hero />
      </Container>

      {children}
    </main>
  );
}

export default Layout;
