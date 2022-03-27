import React from 'react';
import Image from 'components/Image';
import 'styles/blocks/loader/loader.scss';

export default function Loader(): JSX.Element {
  return (
    <Image
      className="loader"
      src="/images/loading.svg"
      alt="loader"
    />
  );
}
