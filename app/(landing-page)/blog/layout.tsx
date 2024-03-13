import * as React from 'react';

import { Header } from '@landing-page/pages/home';
import { Container } from '@landing-page/shared';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='max-sm:px-3 sm:px-4'>
      <Container
        className='mb-0 !pb-0'
        style={{
          background: 'radial-gradient(#F2F3FF 20%, #EDF0F7)',
        }}
        variant='outer'
      >
        <Header />
      </Container>

      {children}
    </main>
  );
}
