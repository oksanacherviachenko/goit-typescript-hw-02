import React from 'react';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={styles.errorContainer}>
    <p className={styles.errorText}>{message || 'Something went wrong. Please try again.'}</p>
  </div>
);

export default ErrorMessage;

