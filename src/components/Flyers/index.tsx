import React from 'react';
import { useSelector } from 'react-redux';
import Flyer from 'components/Flyers/Flyer';

import { FlyerProps } from 'types/reducers.interface';

interface StateProps { flyers: { data: FlyerProps[] } }

function Flyers(): JSX.Element {
  // const dispatch = useDispatch();
  const flyers = useSelector((state: StateProps) => state.flyers.data);

  return (
    <div className="flyers">
      {flyers.map(((flyer) => (
        <Flyer key={flyer.id} flyer={flyer} />
      )))}
    </div>
  );
}

export default Flyers;
