import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
  <li className={styles.card} onClick={onClick}>
    <img
      src={image.urls.small}
      alt={image.alt_description || 'Image'}
      className={styles.image}
    />
  </li>
);

export default ImageCard;

