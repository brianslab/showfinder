import axios from 'axios';
import { useState } from 'react';
import { useGetActorsQuery } from '../store/apis/mediaApi';

import Button from './Button';
import Modal from './Modal';

interface MediaPosterShowProps {
  id: number;
  poster: string;
  title: string;
  type: string;
}

function MediaPosterShow({ id, type, poster, title }: MediaPosterShowProps) {
  const [showModal, setShowModal] = useState(false);
  const [actors, setActors] = useState([]);

  const { data, error, isLoading } = useGetActorsQuery({
    type,
    id,
  });

  // console.log(data);

  const handleClick = () => {
    setShowModal(true);

    if (!isLoading && !error && data) {
      setActors(data);
      console.log(actors);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        Continue
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Select an actor you liked in {title}</p>
      {/* {renderedActors} */}
    </Modal>
  );

  return (
    <div>
      <Button bordered={false} onClick={handleClick}>
        <img src={poster} alt={title} />
      </Button>
      {showModal && modal}
    </div>
  );
}

export default MediaPosterShow;
