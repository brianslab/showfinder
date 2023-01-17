import { keysType, tmdbKeyType } from '../types/keyTypes';

let tmdbKey: tmdbKeyType;

if (
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
) {
  tmdbKey = require('./prod.ts').tmdbKey;
} else {
  tmdbKey = require('./dev.ts').tmdbKey;
}

export const keys: keysType = {
  tmdbKey,
};
