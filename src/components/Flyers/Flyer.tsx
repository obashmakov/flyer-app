import React from 'react';
import Image from 'components/Image';

import 'styles/blocks/flyer.scss';

import { FlyerProps } from 'types/reducers.interface';
import LikeButton from './LikeButton';

interface Props { flyer: FlyerProps }

function Flyer({ flyer }: Props): JSX.Element {
  return (
    <div className="flyer">
      <Image
        className="flyer__image"
        src={flyer.asset}
        alt={flyer.title}
      />

      <div className="flyer__info">
        <p className="flyer__retailer">{flyer.retailer_id}</p>
        <h2 className="flyer__title" title={flyer.title}>{flyer.title}</h2>
        <p className="flyer__category">{flyer.category_id}</p>
      </div>

      <LikeButton id={flyer.id} title={flyer.title} />
    </div>
  );
}

export default Flyer;
