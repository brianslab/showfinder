import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { keys } from '../../config/keys';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/multi',
    {
      headers: {
        Authorization: `Bearer ${keys.tmdbKey.v4}`,
      },
      params: { query: req.query.search },
    }
  );

  res.json(response.data.results);
};
