interface MediaListProps {
  media: Array<Object>;
}

const MediaList: React.FC<MediaListProps> = ({ media }) => {
  return <div>MediaList: {media.length}</div>;
};

export default MediaList;
