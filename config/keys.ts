import { keysType, tmdbKeyType } from '../types/keyTypes';

let tmdbKey: tmdbKeyType;

if (process.env.VERCEL_ENV === 'production') {
  tmdbKey = require('./prod').tmdbKey;
} else {
  tmdbKey = require('./dev').tmdbKey;
}

export const keys: keysType = {
  tmdbKey,
};
