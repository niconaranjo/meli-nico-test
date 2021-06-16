import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Spinner from '../../components/UI/spinner/spinner';
import SearchListItem from '../../components/searchListItem/searchListItem';

import classes from './contentController.module.css';

const ContentController = (props) => {
  const buildSearchQuery = (queryString) => {
    if (queryString) {
      return queryString.split('=')[1];
    }
    return '';
  };

  const initialSearchWord = buildSearchQuery(props.location.search);

  const initialState = {
    items: {},
    author: {},
    categories: [],
  };

  const [state, updateState] = useState({ ...initialState });
  const [searchQuery, updateSearchQuery] = useState(initialSearchWord);
  const [isLoading, updateIsLoading] = useState(true);

  const getData = () => {
    updateIsLoading(true);
    axios
      .get(`http://localhost:8080/api/items?q=${searchQuery}`)
      .then((response) => {
        const { data } = response;

        updateState(() => ({
          items: data.items,
          author: data.autor,
          categories: data.categories,
        }));

        updateIsLoading(false);
      });
  };

  useEffect(() => {
    updateSearchQuery(buildSearchQuery(props.location.search));
  }, [props.location.search]);

  useEffect(() => {
    getData();
  }, [searchQuery]);

  const BuildItems = () => {
    if (!state.items) return (<h1> No data </h1>);

    return <SearchListItem items={state.items} />;
  };

  return (
    <section className={classes.searchContent}>
      {isLoading && <Spinner startSearch={false} />}
      {!isLoading && BuildItems()}
    </section>
  );
};

ContentController.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ContentController;
