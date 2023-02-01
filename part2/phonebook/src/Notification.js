import React from 'react';

export const Notification = ({ errorMessage, successMessage }) => {
  if (!errorMessage && !successMessage) {
    return null;
  }

  return (
    <div
      className={errorMessage ? 'error-notification' : 'success-notification'}
    >
      {successMessage || errorMessage}
    </div>
  );
};
