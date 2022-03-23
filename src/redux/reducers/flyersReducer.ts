/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
import flyers from 'api/flyers.json';
import { FlyersProps } from 'types/reducers.interface';

const initialState: FlyersProps = {
  data: flyers.data,
};

export const flyersReducer = (state = initialState, action: any) => {
  return state;
};
