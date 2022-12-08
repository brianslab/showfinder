import axios from 'axios';

import { tmdbKey } from './keys';

const searchTMDB = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/movie/76341', {
    headers: {
      Authorization: `Bearer ${tmdbKey.v4}`,
    },
    params: {},
  });

  return response;
};

export default searchTMDB;
