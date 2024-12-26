import React from 'react';
import styles from './ImageCard.module.css';
import { ImageCardProps } from '../../types';

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => (
  <li className={styles.card} onClick={onClick}>
    <img
      src={image.urls.small}
      alt={image.alt_description || 'Image'}
      className={styles.image}
    />
  </li>
);

export default ImageCard;


