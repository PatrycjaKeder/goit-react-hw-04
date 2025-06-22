import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    width: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, currentImage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <img
        className={css.photo}
        src={currentImage.url}
        alt={currentImage.alt}
      />
      <p className={css.descrription}>{currentImage.alt}</p>
    </Modal>
  );
};

ImageModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  currentImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageModal;