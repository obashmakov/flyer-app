import React, { Dispatch, SetStateAction } from 'react';
import 'styles/blocks/buttons/clearButton.scss';

interface ButtonProps {
  setInput: Dispatch<SetStateAction<string>>;
}

function ClearButton({ setInput }: ButtonProps): JSX.Element {
  return (
    <button className="clearButton" onClick={() => setInput('')}>
      <i className="fa-solid fa-xmark clearButton__icon" />
    </button>
  );
}

export default ClearButton;
