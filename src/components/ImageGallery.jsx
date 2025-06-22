import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";
import PropTypes from 'prop-types';

const ImageGallery = ({ images, openModal, setCurrentImage }) => {
  return (
    <ul className={css.list}>
      {images.map((card) => (
        <li className={css.listItem} key={card.id}>
          <ImageCard
            openModal={openModal}
            setCurrentImage={setCurrentImage}
            title={card.alt_description}
            url={card.urls}
            likes={card.likes}
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      alt_description: PropTypes.string,
      urls: PropTypes.shape({
        full: PropTypes.string.isRequired,
        small: PropTypes.string.isRequired,
      }).isRequired,
      likes: PropTypes.number,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default ImageGallery;