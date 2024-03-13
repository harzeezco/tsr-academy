import { ReactNode } from 'react';

import { Footer, NewsLetter } from '@landing-page/shared';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Layout;
