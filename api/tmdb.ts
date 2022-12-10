import axios from 'axios';

import { tmdbKey } from './keys';

const searchTMDB = async (term: string) => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/multi',
    {
      headers: {
        Authorization: `Bearer ${tmdbKey.v4}`,
      },
      params: { query: term },
    }
  );

  return response;
};

export default searchTMDB;
