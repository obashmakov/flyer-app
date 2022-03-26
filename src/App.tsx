import React from 'react';
import { useSelector } from 'react-redux';
import Layout from 'components/Layout';
import Flyers from 'components/Flyers';
import Search from 'components/Search';
import Filter from 'components/Filter';

import 'styles/common/global.scss';
import 'styles/common/reset.scss';
import { FilterProps } from 'types/reducers.interface';

interface StateProps { filters: { filters: FilterProps[] } }

function App() {
  const allFilters = useSelector((state: StateProps) => state.filters.filters);

  return (
    <div className="App">
      <Layout>
        <Search />
        <div className="filters">
          {allFilters.map((filter) => (
            <Filter
              key={filter.name}
              name={filter.name}
              filters={filter.filters}
              isOpen={filter.isOpen}
            />
          ))}
        </div>
        <Flyers />
      </Layout>
    </div>
  );
}

export default App;
