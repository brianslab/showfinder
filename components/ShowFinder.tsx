import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import MediaList from '../components/MediaList';
import { useGetMediaByTitleQuery } from '../store';
import Button from './Button';

export interface media {
  id: number;
  poster_path: string;
  name: string;
  date: string;
}

export default function ShowFinder() {
  const [query, setQuery] = useState('');
  const { data, error, isLoading } = useGetMediaByTitleQuery(query);
  let media: media[] = [];

  const handleSubmit = async (title: string) => {
    setQuery(title);
  };

  if (!query) {
    const searchTitle = 'Search for one of your favorite shows or movies';
    media = [];

    return (
      <SearchBar
        onSubmit={handleSubmit}
        title={searchTitle}
        className='flex place-content-center'
      />
    );
  }

  if (isLoading) {
    return (
      <div className='text-2xl text-white font-bold font-mono flex place-content-center'>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-2xl text-white font-bold font-mono flex place-content-center'>
        Error searching for: {query}
        <div className='flex place-content-center'>
          <Button primary={true} onClick={() => setQuery('')}>
            reset
          </Button>
        </div>
      </div>
    );
  }

  if (data) {
    data.map((medium: any) => {
      media.push({
        id: medium.id,
        poster_path: medium.poster_path,
        name: medium.media_type === 'tv' ? medium.name : medium.title,
        date:
          medium.media_type === 'tv'
            ? medium.first_air_date
            : medium.release_date,
      });
    });
  }

  return (
    <div>
      <div className='flex place-content-center'>
        <Button primary={true} onClick={() => setQuery('')}>
          reset
        </Button>
      </div>
      <MediaList media={media} />
    </div>
  );
}
