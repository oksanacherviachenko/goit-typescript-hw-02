import axios from 'axios';

const ACCESS_KEY = 'u5FAUUp9RZBh1ZvdSOfevqesYRqYz2CO2-1gHh6nKQg';

export const fetchImages = async (query, page) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query, page, per_page: 12 },
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });
  return response.data;
};
