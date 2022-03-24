import React from 'react';
import Header from 'components/Header';

import { LayoutProps } from 'types/layout.interface';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
