import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error('Please enter a search query.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <button type="submit" className={styles.button}>
            🔍
          </button>
          <input
            type="text"
            placeholder=""
            value={query}
            onChange={e => setQuery(e.target.value)}
            className={styles.input}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;








