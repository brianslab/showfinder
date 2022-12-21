import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import MediaList from '../components/MediaList';
import searchTMDB from '../api/tmdb';

export default function Home() {
  const [media, setMedia] = useState([{}]);

  const handleSubmit = async (term: string) => {
    const result: Array<Object> = await searchTMDB(term);

    setMedia(result);
  };

  return (
    <div>
      <h1 className='text-3xl text-white font-bold font-mono flex place-content-center'>
        Show Finder
      </h1>
      <div className='flex place-content-center'>
        <SearchBar onSubmit={handleSubmit} />
      </div>
      <div className='flex place-content-center'>
        <MediaList media={media} />
      </div>
    </div>
  );
}
