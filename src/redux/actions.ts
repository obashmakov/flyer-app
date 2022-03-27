import {
  FILTER_FLYERS,
  GET_SEARCH_RESULT,
  OPEN_FILTER,
  SELECT_FILTERS,
  REMOVE_FILTER,
  SEARCH_FLYERS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_EMPTY_STATE,
  ADD_LIKED_FLYER,
  REMOVE_LIKED_FLYER,
} from 'redux/types';

import { LikeButtonProps, SelectedFiltersProps } from 'types/reducers.interface';

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

export function selectFilters(filters: SelectedFiltersProps[]) {
  return {
    type: SELECT_FILTERS,
    payload: filters,
  };
}

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function showError() {
  return { type: SHOW_ERROR };
}

export function showEmptyState() {
  return { type: SHOW_EMPTY_STATE };
}

export function addLikedFlyer(flyer: LikeButtonProps[]) {
  return {
    type: ADD_LIKED_FLYER,
    payload: flyer,
  };
}

export function removeLikedFlyer(flyer: LikeButtonProps[]) {
  return {
    type: REMOVE_LIKED_FLYER,
    payload: flyer,
  };
}
