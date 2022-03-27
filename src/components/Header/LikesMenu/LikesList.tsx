import React, { useEffect, useState } from 'react';

import 'styles/blocks/likesMenu.scss';

interface LikesProps { id: number; title: string; }

function LikesList(): JSX.Element {
  const [likesList, setLikesList] = useState([]);

  useEffect(() => {
    const flyersFromLocalStorage = JSON.parse(
      window.localStorage.getItem('likedFlyers') || '[]',
    );

    // @ts-ignore
    setLikesList(flyersFromLocalStorage);
  }, []);

  if (!likesList.length) return <p className="noFlyers">No preferred flyers</p>;

  return (
    <ul className="likesList">
      {likesList.map((like: LikesProps) => (
        <li className="likesList__item" key={like.id}>
          <i className="fa-solid fa-heart likesList__icon" />
          <p className="likesList__title">{like.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default LikesList;
