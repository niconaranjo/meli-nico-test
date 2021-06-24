import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductImage from '../UI/productImage/productImage';
import classes from './itemImage.module.css';

const ItemImage = (props) => {
  const { pictures } = props;
  const initialState = pictures[0];
  const [state, updateState] = useState({ ...initialState });

  const mouseEventHandler = (position) => {
    updateState(pictures[position]);
  };

  const buildImageRow = () => {
    if (pictures.length === 0) return '';

    return pictures
      .slice(0, 6)
      .map((picture, index) => (
        <ProductImage
          key={picture.url}
          className={classes.itemImage__image__row_item}
          src={picture.url}
          alt={props.title}
          mouseEnter={() => mouseEventHandler(index)}
        />
      ));
  };

  return (
    <div className={classes.itemImage__Container}>
      <div className={classes.itemImage__image__row}>{buildImageRow()}</div>
      <div className={classes.itemImage__image__main__container}>
        <ProductImage
          className={classes.itemImage__image__main__image}
          src={state.url}
          alt={props.title}
        />
      </div>
    </div>
  );
};

ItemImage.propTypes = {
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ItemImage;
