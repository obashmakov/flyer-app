import React from 'react';

import { FlyerProps, LikeButtonProps } from 'types/reducers.interface';

function LikeButton({ id, title }: LikeButtonProps): JSX.Element {
  const handleClick = () => {
    const flyersFromLocalStorage: FlyerProps[] = JSON.parse(
      window.localStorage.getItem('likedFlyers') || '[]',
    );
    const isFlyerInLocalStorage = flyersFromLocalStorage.some(
      (flyer) => flyer.id === id,
    );

    if (isFlyerInLocalStorage) {
      const filteredFlyers = flyersFromLocalStorage.filter(
        (flyer) => flyer.id !== id,
      );

      window.localStorage.setItem(
        'likedFlyers',
        JSON.stringify(filteredFlyers),
      );
    } else {
      window.localStorage.setItem(
        'likedFlyers',
        JSON.stringify([...flyersFromLocalStorage, { id, title }]),
      );
    }
  };

  return (
    <button className="flyer__button" onClick={handleClick}>
      <i className="fa-solid fa-heart flyer__heartIcon" />
    </button>
  );
}

export default LikeButton;
