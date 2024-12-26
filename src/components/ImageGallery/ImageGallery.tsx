import React from 'react';
import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from '../../types';

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (!images.length) return null;

  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
      ))}
    </ul>
  );
};

export default ImageGallery;





