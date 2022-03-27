import React, { useRef } from 'react';
import useModalOutsideClick from 'helpers/hooks/useModalOutsideClick';

import 'styles/blocks/modal.scss';

import { ModalProps } from 'types/layout.interface';

function Modal({
  width,
  height,
  children,
  setIsModalOpen,
}: ModalProps): JSX.Element {
  const modalRef = useRef(null);
  useModalOutsideClick(modalRef, setIsModalOpen);

  return (
    <div className="modalContainer">
      <div
        ref={modalRef}
        className="modal"
        style={{ width, height }}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
