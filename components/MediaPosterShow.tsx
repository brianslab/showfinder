import { useState } from 'react';

import Button from './Button';
import Modal from './Modal';

interface MediaPosterShowProps {
  poster: string;
  title: string;
  id: number;
}

function MediaPosterShow({ poster, title, id }: MediaPosterShowProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
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
      <p>{title}</p>
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
