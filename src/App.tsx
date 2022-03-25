import React from 'react';
import Layout from 'components/Layout';
import Flyers from 'components/Flyers';

import 'styles/common/global.scss';
import 'styles/common/reset.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Flyers />
      </Layout>
    </div>
  );
}

export default App;
