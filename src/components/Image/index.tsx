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
      setSrc('/flyer-app/images/no-image.svg');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsSrc]);

  const onError = () => {
    if (props.src) setSrc('/flyer-app/images/no-image.svg');
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
