import React from 'react';
import Image from 'components/Image';

import 'styles/blocks/likesMenu.scss';

function LikesHeading(): JSX.Element {
  return (
    <div className="likesHead">
      <Image className="likesHead__logo" src="/images/logo.svg" alt="logo" />
      <h3 className="likesHead__title">
        Favourites
      </h3>
      <p className="likesHead__info">
        The list of your preferred flyers
      </p>
    </div>
  );
}

export default LikesHeading;
