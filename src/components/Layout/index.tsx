import React from 'react';
import Header from 'components/Header';

import 'styles/blocks/main.scss';

import { LayoutProps } from 'types/layout.interface';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
    </>
  );
}

export default Layout;
