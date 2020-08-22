import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isgooglesignin,
  isinverted,
  ...otherProps
}) => (
  <button
    className={`${isinverted ? 'inverted' : ''} ${
      isgooglesignin ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
