import React from 'react';
import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

interface Image {
  id: string;
  urls: { small: string };
  alt_description: string | null;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

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




