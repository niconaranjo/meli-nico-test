import React from 'react';
import PropTypes from 'prop-types';
import classes from './searchItem.module.css';
import envioGratis from '../../../assets/ic_shipping.svg';
import { priceFormat } from '../../../utils/priceFormat';

const SearchItem = (props) => {
  const isLast = props['item-index'] === props.length - 1;

  const price = priceFormat(props.item.price.currency, props.item.price.amount);

  return (
    <a
      href={`items/${props.item.id}`}
      className={`${classes.searchItem} ${isLast ? classes.isLast : ''}`}
    >
      <div className={classes.searchItem__image}>
        <img src={props.item.picture} alt={props.item.title} />
      </div>
      <div className={classes.searchItem__headerContainer}>
        <div className={classes['searchItem__headerContainer--header']}>
          <div
            className={classes['searchItem__headerContainer--header__price']}
          >
            <h2>{`${price}`}</h2>
            {props.item.free_shipping && (
              <img src={envioGratis} aria-label="Envio Gratis" />
            )}
          </div>
          <p>{props.item.city}</p>
        </div>
        <div className={classes.searchItem__body}>
          <p>{props.item.title}</p>
        </div>
      </div>
    </a>
  );
};

SearchItem.propTypes = {
  item: PropTypes.object.isRequired,
  'item-index': PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default SearchItem;
