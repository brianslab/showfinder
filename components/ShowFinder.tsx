import { useState } from 'react';
import classNames from 'classnames';

import SearchBar from '../components/SearchBar';
import MediaList from '../components/MediaList';
import { useGetMediaByTitleQuery } from '../store';

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
      </div>
    );
  }

  return <MediaList media={data} />;
}
