import { keysType, tmdbKeyType } from '../types/keyTypes';

let tmdbKey: tmdbKeyType;
const ON_VERCEL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview';

if (ON_VERCEL === true) {
  tmdbKey = require('./prod').tmdbKey;
} else {
  tmdbKey = require('./dev').tmdbKey;
}

export const keys: keysType = {
  tmdbKey,
};
