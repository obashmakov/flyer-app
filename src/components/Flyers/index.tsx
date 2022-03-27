import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flyer from 'components/Flyers/Flyer';
import Loader from 'components/Loader';

import { FlyerProps } from 'types/reducers.interface';
import { AppProps } from 'types/app.interface';
import {
  hideLoader,
  showEmptyState,
  showError,
  showLoader,
} from 'redux/actions';

interface StateProps { flyers: { data: FlyerProps[] } }

function Flyers(): JSX.Element {
  const dispatch = useDispatch();
  const flyers = useSelector((state: StateProps) => state.flyers.data);
  const { app } = useSelector((state: AppProps) => state);

  useEffect(() => {
    if (!flyers) {
      dispatch(showError());
    }

    if (!flyers.length) {
      dispatch(showEmptyState());
    }

    dispatch(showLoader());
    setTimeout(() => {
      dispatch(hideLoader());
    }, 500);
  }, [dispatch, flyers]);

  if (app.loading) {
    return (
      <div className="loaderContainer">
        <Loader />
      </div>
    );
  }

  if (app.empty) {
    return (
      <div className="loaderContainer">
        <h3>No Flyers founded</h3>
      </div>
    );
  }

  if (app.error) {
    return (
      <div className="loaderContainer">
        <h3>Something went wrong. Please try again</h3>
      </div>
    );
  }

  return (
    <div className="flyers">
      {flyers.map(((flyer) => (
        <Flyer key={flyer.id} flyer={flyer} />
      )))}
    </div>
  );
}

export default Flyers;
