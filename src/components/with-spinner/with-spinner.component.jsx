import React from 'react';
import './with-spinner.styles.scss';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container" />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );

export default WithSpinner;
