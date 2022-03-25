import React, { useState, useEffect } from 'react';

export interface ImagePropsTypes {
  src: string;
  alt: string;
  className?: string;
}

export default function Image(
  props: ImagePropsTypes & React.HTMLAttributes<any>,
): JSX.Element {
  const { src: propsSrc, alt, className } = props;
  const [src, setSrc] = useState(propsSrc);

  useEffect(() => {
    if (src !== propsSrc) {
      setSrc(propsSrc);
    }
    if (!propsSrc) {
      setSrc('/images/no-image.svg');
    }
  }, [propsSrc, src]);

  const onError = () => {
    if (props.src) setSrc('/images/no-image.svg');
  };

  return (
    <img
      className={className}
      onError={() => onError()}
      loading="lazy"
      src={src}
      alt={alt}
    />
  );
}

Image.defaultProps = {
  className: '',
};
