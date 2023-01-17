import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import MediaList from '../components/MediaList';
import { useGetMediaByTitleQuery } from '../store';
import Button from './Button';

export default function ShowFinder() {
  const [query, setQuery] = useState('');
  const { data, error, isLoading } = useGetMediaByTitleQuery(query);

  const handleSubmit = async (title: string) => {
    setQuery(title);
  };

  if (!query) {
    const searchTitle = 'Search for one of your favorite shows or movies';

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

  return (
    <div>
      <div className='flex place-content-center'>
        <Button primary={true} onClick={() => setQuery('')}>
          reset
        </Button>
      </div>
      <MediaList media={data} />
    </div>
  );
}
