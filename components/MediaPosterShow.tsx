import Button from './Button';

interface MediaPosterShowProps {
  poster: string;
  title: string;
  id: number;
}

const MediaPosterShow: React.FC<MediaPosterShowProps> = ({
  poster,
  title,
  id,
}) => {
  return (
    <Button bordered={false} onClick={() => console.log('clicked on', id)}>
      <img src={poster} alt={title} />
    </Button>
  );
};

export default MediaPosterShow;
