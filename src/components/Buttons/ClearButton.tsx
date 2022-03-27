import React, { Dispatch, SetStateAction } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { filterFlyers, openFilter, selectFilters } from 'redux/actions';
import 'styles/blocks/buttons/clearButton.scss';

import { SelectedFiltersProps } from 'types/reducers.interface';

interface ButtonProps {
  setInput?: Dispatch<SetStateAction<string>>;
  setAreResultsOpen?: Dispatch<SetStateAction<boolean>>;
  setCheckedFilters?: Dispatch<SetStateAction<any>>;
  type?: string;
  filterType?: string;
}

interface StateProps { filters: { selectedFilters: SelectedFiltersProps[] } }

function ClearButton({
  setInput,
  setAreResultsOpen,
  setCheckedFilters,
  type,
  filterType,
}: ButtonProps): JSX.Element {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector((state: StateProps) => state.filters);

  return (
    <button
      className={cx({
        clearButton: true,
        'clearButton--filterType': type === 'filter',
      })}
      onClick={() => {
        if (setInput && setAreResultsOpen) {
          setInput('');
          setAreResultsOpen(false);
        }

        if (setCheckedFilters) {
          setCheckedFilters([]);
        }

        const filtersToRemove = selectedFilters.filter(
          (filter) => filter.filterType !== filterType,
        );

        dispatch(selectFilters(filtersToRemove));
        dispatch(filterFlyers(filtersToRemove));
        dispatch(openFilter(''));
      }}
    >
      <i className="fa-solid fa-xmark clearButton__icon" />
    </button>
  );
}

ClearButton.defaultProps = {
  setInput: () => undefined,
  setAreResultsOpen: () => undefined,
  setCheckedFilters: () => undefined,
  type: '',
  filterType: '',
};

export default ClearButton;
