import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { keys } from '../../../config/keys';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `https://api.themoviedb.org/3/${req.query.type}/${req.query.id}/credits`;
  console.log(url);
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${keys.tmdbKey.v4}`,
    },
    // params: { query: req.query.search },
  });

  res.json(response.data.results);
};
