import { useEffect } from 'react';
import { ModalBackdrop, ModalContent, ModalImage } from './Modal.styled';

export const Modal = ({ modalOpen, closeModal, img, alt }) => {
  useEffect(() => {
    const handleEsc = evt => {
      if (modalOpen && evt.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleEsc);

    return () => document.removeEventListener('keydown', handleEsc);
  }, [modalOpen, closeModal]);

  const backdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalBackdrop onClick={backdropClick}>
      <ModalContent>
        <ModalImage src={img} alt={alt} />
      </ModalContent>
    </ModalBackdrop>
  );
};
