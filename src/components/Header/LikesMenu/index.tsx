import React from 'react';
import LikesHeading from 'components/Header/LikesMenu/LikesHeading';
import LikesList from 'components/Header/LikesMenu/LikesList';

function LikesMenu(): JSX.Element {
  return (
    <>
      <LikesHeading />
      <LikesList />
    </>
  );
}

export default LikesMenu;
