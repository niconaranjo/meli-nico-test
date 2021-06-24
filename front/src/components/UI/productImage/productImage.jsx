import React from 'react';
import PropTypes from 'prop-types';

const productImage = (props) => (
  <div className={props.className} onMouseEnter={props.mouseEnter}>
    <img src={props.src} alt={props.alt} />
  </div>
);

productImage.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  mouseEnter: PropTypes.func,
};

export default productImage;
