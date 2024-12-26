import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { ImageModalProps } from '../../types';

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        src={image.urls.regular || image.urls.small}
        alt={image.alt_description || 'Large image'}
        className={styles.image}
      />
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;




