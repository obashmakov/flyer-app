import React from 'react';
import { useSelector } from 'react-redux';
import Layout from 'components/Layout';
import Flyers from 'components/Flyers';
import Search from 'components/Search';
import Filter from 'components/Filter';

import 'styles/common/global.scss';
import 'styles/common/reset.scss';

import { FilterProps, SelectedFiltersProps } from 'types/reducers.interface';

interface StateProps { filters: { filters: FilterProps[] } }
interface SelectedFiltersStateProps { filters: { selectedFilters: SelectedFiltersProps[] } }

function App() {
  const allFilters = useSelector((state: StateProps) => state.filters.filters);
  const { selectedFilters } = useSelector((state: SelectedFiltersStateProps) => state.filters);

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
              selectedFilters={selectedFilters.filter(
                (item) => item.filterType === `${filter.name.toLowerCase()}_id`,
              )}
            />
          ))}
        </div>
        <Flyers />
      </Layout>
    </div>
  );
}

export default App;
