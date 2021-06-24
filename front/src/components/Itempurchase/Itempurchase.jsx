import React from 'react';
import PropTypes from 'prop-types';
import classes from './Itempurchase.module.css';
import { priceFormat } from '../../utils/priceFormat';
import MeliData from '../../contentData/contentData';
import envioGratis from '../../assets/ic_shipping.svg';

const itemPurchase = (props) => {
  const price = priceFormat(props.item.price.currency, props.item.price.amount);

  return (
    <div className={classes.Itempurchase}>
      <div className={classes.Itempurchase__eyebrow}>
        {props.item.condition === MeliData.ITEM.NEW_CONDITION
          ? MeliData.ITEM.NEW
          : MeliData.ITEM.USED}
        {props.item.sold_quantity === 0
          ? ''
          : ` - ${props.item.sold_quantity} ${MeliData.ITEM.SOLD}`}
        {props.item.free_shipping && (
          <img src={envioGratis} aria-label="Envio Gratis" />
        )}
      </div>
      <h4 className={classes.Itempurchase__title}>{props.item.title}</h4>
      <h2 className={classes.Itempurchase__price}>{price}</h2>
      <button className={classes.Itempurchase__button} type="button">
        {MeliData.ITEM.BUY_BUTTON}
      </button>
    </div>
  );
};

itemPurchase.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default itemPurchase;
