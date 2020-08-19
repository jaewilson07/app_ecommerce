import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ onChange, label, ...otherProps }) => (
  <div className="group">
    <input type={otherProps.type} className="form-input" onChange={onChange} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}{' '}
      </label>
    ) : null}
  </div>
);

export default FormInput;
