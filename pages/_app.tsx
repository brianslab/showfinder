import type { AppProps } from 'next/app';
import '../styles/globals.css';
import searchTMDB from '../api/tmdb';

export default function App({ Component, pageProps }: AppProps) {
  searchTMDB();

  return <Component {...pageProps} />;
}
