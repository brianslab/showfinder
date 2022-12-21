import MediaPosterShow from './MediaPosterShow';

interface MediaListProps {
  media: any;
}

const MediaList: React.FC<MediaListProps> = ({ media }) => {
  const renderedMedia = media.map((medium: any) => {
    let poster = `https://image.tmdb.org/t/p/w500/${medium.poster_path}`;

    return (
      <div key={medium.id}>
        <MediaPosterShow title={medium.original_name} poster={poster} />
        {medium.name || medium.title}
      </div>
    );
  });

  return <div>{renderedMedia}</div>;
};

export default MediaList;
