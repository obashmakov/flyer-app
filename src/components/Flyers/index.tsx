import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flyer from 'components/Flyers/Flyer';
import Loader from 'components/Loader';

import { FlyerProps } from 'types/reducers.interface';
import { AppProps } from 'types/app.interface';
import { hideLoader, showLoader } from 'redux/actions';

interface StateProps { flyers: { data: FlyerProps[] } }

function Flyers(): JSX.Element {
  const dispatch = useDispatch();
  const flyers = useSelector((state: StateProps) => state.flyers.data);
  const loading = useSelector((state: AppProps) => state.app.loading);

  useEffect(() => {
    dispatch(showLoader());
    setTimeout(() => {
      dispatch(hideLoader());
    }, 1000);
  }, [dispatch, flyers]);

  if (loading) {
    return (
      <div className="loaderContainer">
        <Loader />
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
