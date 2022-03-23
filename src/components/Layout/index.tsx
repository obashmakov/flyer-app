import React from 'react';
import Header from 'components/Header';

import { LayoutProps } from 'types/layout.interface';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
