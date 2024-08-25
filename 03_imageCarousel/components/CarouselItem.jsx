import PropTypes from 'prop-types';

const CarouselItem = ({ src, alt, isActive }) => (
  <img
    src={src}
    alt={alt}
    className={`slide ${isActive ? 'slide-active' : ''}`}
  />
);

CarouselItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default CarouselItem