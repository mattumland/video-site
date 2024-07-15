import { useState } from 'react';
import { createPortal } from 'react-dom';
import AddVideoForm from './AddVideoForm';
import { StyledButton } from '../styledElements';

const AddVideoButton = ({setVideos, setLoading}) => {
  const [showModal, setShowModal] = useState(false);
  const modalRoot = document.getElementById('modal-root');

  return (
    <>
      <StyledButton onClick={() => setShowModal(true)}>
        New Video
      </StyledButton>
      {showModal && createPortal(
        <AddVideoForm
          setVideos={setVideos}
          setLoading={setLoading}
          onClose={() => setShowModal(false)}
        />,
        modalRoot
      )}
    </>
  )
}


export default AddVideoButton
