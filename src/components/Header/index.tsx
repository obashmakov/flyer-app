import React, { useState } from 'react';
import Modal from 'components/Modal';

import 'styles/blocks/header.scss';
import LikesMenu from './LikesMenu';

function Header(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header">
      <button className="header__menuButton" onClick={() => setIsModalOpen(true)}>
        <i className="fa-solid fa-bars header__menuIcon" />
      </button>
      <p className="header__title">ShopFully</p>
      {isModalOpen && (
        <Modal width="280px" height="100vh" setIsModalOpen={setIsModalOpen}>
          <LikesMenu />
        </Modal>
      )}
    </header>
  );
}

export default Header;
