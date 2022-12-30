import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import MediaList from '../components/MediaList';
import searchTMDB from './api/tmdb';
import axios from 'axios';

export default function Home() {
  const [media, setMedia] = useState([{}]);

  const handleSubmit = async (term: string) => {
    const response = await fetch('/api/tmdb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ term }),
    });

    const result = await response.json();
    setMedia(result);
  };

  return (
    <div>
      <h1 className='text-3xl text-white font-bold font-mono flex place-content-center'>
        Show Finder
      </h1>
      <h3 className='text-3xl text-white font-bold font-mono flex place-content-center'>
        Search for one of your favorite shows
      </h3>
      <div className='flex place-content-center'>
        <SearchBar onSubmit={handleSubmit} />
      </div>
      <div className='flex place-content-center'>
        <MediaList media={media} />
      </div>
    </div>
  );
}
