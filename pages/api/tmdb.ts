import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { keys } from '../../config/keys';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await axios.get('https://api.themoviedb.org/3/search/tv', {
    headers: {
      Authorization: `Bearer ${keys.tmdbKey.v4}`,
    },
    params: { query: req.query.term },
  });

  res.json(response.data.results);
};
