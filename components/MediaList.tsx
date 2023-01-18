import MediaPosterShow from './MediaPosterShow';
import { media } from './ShowFinder';

interface MediaListProps {
  media: media[];
}

const MediaList: React.FC<MediaListProps> = ({ media }) => {
  const renderedMedia = media.map((medium: media) => {
    const poster = `https://image.tmdb.org/t/p/w500/${medium.poster_path}`;
    const exists = medium.poster_path ? '' : 'hidden';

    return (
      <div key={medium.id} className={exists}>
        <MediaPosterShow
          id={medium.id}
          type={medium.type}
          title={medium.name}
          poster={poster}
        />
        <div className='text-center text-white italic'>
          <p>{medium.name}</p>
          <p>{medium.date}</p>
        </div>
      </div>
    );
  });

  return <div className='m-10 grid grid-cols-5 gap-10'>{renderedMedia}</div>;
};

export default MediaList;
