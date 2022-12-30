import { tmdbKeyType } from '../types/keyTypes';

export const tmdbKey: tmdbKeyType = {
  v3: process.env.TMDB_V3,
  v4: process.env.TMDB_V4,
};
