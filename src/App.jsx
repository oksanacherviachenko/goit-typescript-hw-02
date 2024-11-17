import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from './services/api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import styles from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchAndSetImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchImages(query, page);
        setImages(prev => (page === 1 ? data.results : [...prev, ...data.results]));
        setTotalPages(data.total_pages);
      } catch (err) {
        setError('Failed to fetch images. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => setPage(prev => prev + 1);

  return (
    <div className={styles.app}>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={setSelectedImage} />
          {isLoading && <Loader />}
          {images.length > 0 && page < totalPages && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
          {selectedImage && (
            <ImageModal
              isOpen={!!selectedImage}
              image={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;




