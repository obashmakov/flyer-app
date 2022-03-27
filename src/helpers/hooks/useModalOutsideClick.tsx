// @ts-nocheck
import React, { useEffect, Dispatch, SetStateAction } from 'react';

export default function useModalOutsideClick(
  ref: any,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
) {
  useEffect(() => {
    function handleClickOutside(e: React.SyntheticEvent) {
      if (ref.current && !ref.current.contains(e.target)) {
        setTimeout(() => {
          setIsModalOpen(false);
        }, 200);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, setIsModalOpen]);
}
