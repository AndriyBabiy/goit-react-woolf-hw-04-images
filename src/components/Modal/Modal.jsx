import { ModalBackdrop, ModalContent, ModalImage } from './Modal.styled';

export const Modal = ({ closeModal, img, alt }) => {
  return (
    <ModalBackdrop onClick={closeModal}>
      <ModalContent>
        <ModalImage src={img} alt={alt} />
      </ModalContent>
    </ModalBackdrop>
  );
};
