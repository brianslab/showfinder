import axios from 'axios';

import { keys } from '../config/keys';

const searchTMDB = async (term: string): Promise<Array<Object>> => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/multi',
    {
      headers: {
        Authorization: `Bearer ${keys.tmdbKey.v4}`,
      },
      params: { query: term },
    }
  );

  return response.data.results;
};

export default searchTMDB;
