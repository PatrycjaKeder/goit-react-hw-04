import css from "./LoadMoreBtn.module.css";
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={css.loadMoreBtn} type="button">
      Load More
    </button>
  );
};
LoadMoreBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;