import styled from 'styled-components'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import AddVideoForm from './AddVideoForm';

const StyledButton = styled.button`
  color: var(--font-color);
  border: 2px solid var(--font-color);
  border-radius: 5px;
  background-color: var(--background);
  padding: 0 .5rem;
  font-weight: bold;

  &:hover {
    color: var(--card-color);
    background-color: var(--font-color);
  }
`

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
