import React from 'react';
import styles from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../../types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button onClick={onClick} className={styles.button}>
    Load more
  </button>
);

export default LoadMoreBtn;



