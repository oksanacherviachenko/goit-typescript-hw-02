import React from 'react';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  image: { urls: { small: string }; alt_description: string | null };
  onClick: () => void;
}

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

