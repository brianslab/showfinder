import MediaPosterShow from './MediaPosterShow';
import { useGetMediaByTitleQuery } from '../store';

interface MediaListProps {
  query: string;
}

const MediaList: React.FC<MediaListProps> = ({ query }) => {
  const { data, error, isLoading } = useGetMediaByTitleQuery(query);

  if (!query) {
    return <div />;
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

  const renderedMedia = data.map((medium: any) => {
    const poster = `https://image.tmdb.org/t/p/w500/${medium.poster_path}`;
    const exists = medium.poster_path ? '' : 'hidden';

    return (
      <div key={medium.id} className={exists}>
        <MediaPosterShow title={medium.original_name} poster={poster} />
        <div className='text-center text-white italic'>
          <p>{medium.name || medium.title}</p>
          <p>{medium.first_air_date || medium.release_date}</p>
        </div>
      </div>
    );
  });

  return <div className='m-10 grid grid-cols-5 gap-10'>{renderedMedia}</div>;
};

export default MediaList;
