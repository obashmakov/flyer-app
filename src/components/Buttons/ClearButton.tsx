import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { removeFilters } from 'redux/actions';
import 'styles/blocks/buttons/clearButton.scss';

interface ButtonProps {
  setInput: Dispatch<SetStateAction<string>>;
}

function ClearButton({ setInput }: ButtonProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <button
      className="clearButton"
      onClick={() => {
        setInput('');
        dispatch(removeFilters());
      }}
    >
      <i className="fa-solid fa-xmark clearButton__icon" />
    </button>
  );
}

export default ClearButton;
