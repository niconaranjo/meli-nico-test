import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Spinner from '../../components/UI/spinner/spinner';
import ItemImage from '../../components/ItemImage/itemImage';

import classes from './itemController.module.css';
import ItemPurchase from '../../components/Itempurchase/Itempurchase';
import BodyCopy from '../../components/UI/bodyCopy/bodyCopy';
import MeliData from '../../contentData/contentData';

const itemController = (props) => {
  const initialSearchWord = props.match.params.id;

  const initialState = {
    searchFound: false,
    item: {},
  };

  const [state, updateState] = useState({ ...initialState });
  const [searchId, updateSearchId] = useState(initialSearchWord);
  const [isLoading, updateIsLoading] = useState(true);

  const getData = () => {
    updateIsLoading(true);
    axios
      .get(`http://localhost:8080/api/items/${searchId}`)
      .then((response) => {
        const { data } = response;

        updateState((oldState) => ({
          ...oldState,
          item: data.item,
        }));

        updateIsLoading(false);
      });
  };

  useEffect(() => {
    updateSearchId(props.match.params.id);
  }, [props.match.params.id]);

  useEffect(() => {
    getData();
  }, [searchId]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <section
        className={`${classes.itemContent} ${
          isLoading ? classes.activeSpinner : ''
        }`}
      >
        {isLoading && <Spinner startSearch={state.searchFound} />}
        {!isLoading && (
          <div className={classes.itemContent__container}>
            <div className={classes['itemContent__container--left-row']}>
              <ItemImage
                pictures={state.item.picture}
                title={state.item.title}
              />
              <BodyCopy
                className={classes['itemContent__container--description']}
                title={MeliData.ITEM.PRODUCT_DESCRIPTION}
                description={state.item.description}
              />
            </div>
            <div className={classes['itemContent__container--right-row']}>
              <ItemPurchase item={state.item} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

itemController.propTypes = {
  match: PropTypes.object.isRequired,
};

export default itemController;
