import React, { Dispatch, SetStateAction } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ModalProps {
  width: string;
  height: string;
  children: React.ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
