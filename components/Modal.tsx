import ReactDOM from 'react-dom';
import { useEffect } from 'react';

// add the following code to _app.tsx:

// useEffect(() => {
//   const modalContainer = document.createElement('div');
//   modalContainer.classList.add('modal-container');
//   document.body.appendChild(modalContainer);

//   return () => {
//     document.body.removeChild(modalContainer);
//   };
// }, []);

interface ModalProps {
  onClose: any;
  children: any;
  actionBar: any;
}

function Modal({ onClose, children, actionBar }: ModalProps) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='fixed inset-0 bg-gray-300 opacity-80'
      ></div>
      <div className='fixed inset-40 p-10 bg-white'>
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div className='flex justify-end'>{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;