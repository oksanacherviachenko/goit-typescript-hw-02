import axios from 'axios';

const ACCESS_KEY = 'u5FAUUp9RZBh1ZvdSOfevqesYRqYz2CO2-1gHh6nKQg';

// Інтерфейси для типізації відповіді від API
export interface UnsplashImage {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string | null;
}

export interface FetchImagesResponse {
  results: UnsplashImage[];
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(
    'https://api.unsplash.com/search/photos',
    {
      params: { query, page, per_page: 12 },
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    }
  );
  return response.data;
};
