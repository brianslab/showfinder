import Button from './Button';

interface MediaPosterShowProps {
  poster: string;
  title: string;
}

const MediaPosterShow: React.FC<MediaPosterShowProps> = ({ poster, title }) => {
  return (
    <Button bordered={false}>
      <img src={poster} alt={title} />
    </Button>
  );
};

export default MediaPosterShow;
