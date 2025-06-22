import css from "./ImageCard.module.css";
import PropTypes from 'prop-types';

const ImageCard = ({ title, url, likes, openModal, setCurrentImage }) => {
  const handleClick = () => {
    setCurrentImage({ url: url.full, alt: title });
    openModal();
  };

  return (
    <div onClick={handleClick} className={css.wrapper}>
      <img className={css.imageCard} src={url.small} alt={title} />
      <div className={css.descriptionWrapper}>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.shape({
    full: PropTypes.string.isRequired,
    small: PropTypes.string.isRequired,
  }).isRequired,
  likes: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default ImageCard;