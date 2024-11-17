import React from 'react';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <Circles color="#007bff" />
  </div>
);

export default Loader;
