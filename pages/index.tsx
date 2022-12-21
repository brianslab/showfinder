import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import MediaList from '../components/MediaList';
import searchTMDB from '../api/tmdb';

export default function Home() {
  const [media, setMedia] = useState([{}]);

  const handleSubmit = async (term: string) => {
    const result: Array<Object> = await searchTMDB(term);
    console.log(result);
    setMedia(result);
  };

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <div>
        <SearchBar onSubmit={handleSubmit} />
        <MediaList media={media} />
      </div>
    </div>
  );
}
