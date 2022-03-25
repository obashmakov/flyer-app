import { FILTER_FLYERS } from 'redux/types';
import { FlyerProps } from 'types/reducers.interface';

export function filterFlyers(flyers: FlyerProps[], id: number) {
  return {
    type: FILTER_FLYERS,
    payload: flyers.filter((flyer) => flyer.category_id === id),
  };
}
