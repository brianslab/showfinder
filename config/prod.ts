import { tmdbKeyType } from '../types/keyTypes';

export const tmdbKey: tmdbKeyType = {
  v3: process.env.NEXT_PUBLIC_TMDB_V3,
  v4: process.env.NEXT_PUBLIC_TMDB_V4,
};
