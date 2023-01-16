import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import MediaList from '../components/MediaList';

export default function Home() {
  const [media, setMedia] = useState([{}]);

  const handleSubmit = async (term: string) => {
    const response = await fetch(`/api/tmdb?term=${term}`, {
      method: 'GET',
    });

    const result = await response.json();
    setMedia(result);
  };

  return (
    <div>
      <h1 className='text-3xl text-white font-bold font-mono flex place-content-center'>
        Show Finder
      </h1>
      <div className='text-white font-bold font-mono flex place-content-center'>
        powered by
        <div className='w-10 h-10'>
          <a href='https://www.themoviedb.org/' target='_blank'>
            <img src='tmdb.svg' alt='tmdb' />
          </a>
        </div>
      </div>
      <h3 className='text-2xl text-white font-bold font-mono flex place-content-center'>
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
