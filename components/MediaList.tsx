import MediaPosterShow from './MediaPosterShow';

interface MediaListProps {
  media: any;
}

const MediaList: React.FC<MediaListProps> = ({ media }) => {
  const renderedMedia = media.map((medium: any) => {
    let poster = `https://image.tmdb.org/t/p/w500/${medium.poster_path}`;
    let exists = medium.poster_path ? '' : 'hidden';

    return (
      <div key={medium.id} className={`${exists}`}>
        <MediaPosterShow title={medium.original_name} poster={poster} />
        <div className='text-center text-white italic'>
          {medium.name || medium.title}
        </div>
      </div>
    );
  });

  return <div className='m-10 grid grid-cols-5 gap-10'>{renderedMedia}</div>;
};

export default MediaList;
