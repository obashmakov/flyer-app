import {
  FILTER_FLYERS,
  GET_SEARCH_RESULT,
  OPEN_FILTER,
  SELECT_FILTERS,
  REMOVE_FILTER,
  SEARCH_FLYERS,
} from 'redux/types';

import { SelectedFiltersProps } from 'types/reducers.interface';

export function filterFlyers(filters: SelectedFiltersProps[]) {
  return {
    type: FILTER_FLYERS,
    payload: filters,
  };
}

export function searchFlyers(text: string) {
  return {
    type: SEARCH_FLYERS,
    payload: text,
  };
}

export function getSearchResult(text: string) {
  return {
    type: GET_SEARCH_RESULT,
    payload: text,
  };
}

export function removeFilters(type: string) {
  return {
    type: REMOVE_FILTER,
    payload: type,
  };
}

export function openFilter(name: string) {
  return {
    type: OPEN_FILTER,
    payload: name,
  };
}

export function selectFilters(filters: any) {
  return {
    type: SELECT_FILTERS,
    payload: filters,
  };
}
