interface MediaPosterShowProps {
  poster: string;
  title: string;
}

const MediaPosterShow: React.FC<MediaPosterShowProps> = ({ poster, title }) => {
  return (
    <div>
      <img src={poster} alt={title} />
    </div>
  );
};

export default MediaPosterShow;
