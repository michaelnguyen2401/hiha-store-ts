import React from 'react';

type Props = {
  width?: string;
  height?: string;
  classes?: string;
  isInverted?: boolean;
};

const Spinner: React.FC<Props> = (props: Props) => {
  const {
    width = '50px',
    height = '50px',
    classes = '',
    isInverted = false,
  } = props;

  return (
    <div className={`c-spinner ${classes}`}>
      <div
        style={{ width, height }}
        className={`c-spinner__loading ${isInverted ? 'is-inverted' : ''}`}
      />
    </div>
  );
};

export default Spinner;
