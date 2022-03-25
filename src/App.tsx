import React from 'react';
import Layout from 'components/Layout';
import Flyers from 'components/Flyers';
import Search from 'components/Search';

import 'styles/common/global.scss';
import 'styles/common/reset.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Search />
        <Flyers />
      </Layout>
    </div>
  );
}

export default App;
