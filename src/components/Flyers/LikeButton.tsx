import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';

import { LikeButtonProps } from 'types/reducers.interface';
import { addLikedFlyer, removeLikedFlyer } from 'redux/actions';

function LikeButton({ id, title }: LikeButtonProps): JSX.Element {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const flyersFromLocalStorage: LikeButtonProps[] = JSON.parse(
      window.localStorage.getItem('likedFlyers') || '[]',
    );
    const isFlyerInLocalStorage = flyersFromLocalStorage.some(
      (flyer) => flyer.id === id,
    );

    setIsLiked(isFlyerInLocalStorage);
  }, [id, isLiked]);

  const handleClick = () => {
    setIsLiked(!isLiked);
    const flyersFromLocalStorage: LikeButtonProps[] = JSON.parse(
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

      dispatch(removeLikedFlyer(filteredFlyers));
    } else {
      window.localStorage.setItem(
        'likedFlyers',
        JSON.stringify([...flyersFromLocalStorage, { id, title }]),
      );

      dispatch(addLikedFlyer([...flyersFromLocalStorage, { id, title }]));
    }
  };

  return (
    <button className="flyer__button" onClick={handleClick}>
      <i
        className={cx({
          'fa-solid': true,
          'fa-heart': true,
          flyer__heartIcon: true,
          'flyer__heartIcon--liked': isLiked,
        })}
      />
    </button>
  );
}

export default LikeButton;
