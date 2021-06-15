import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Spinner from '../../components/UI/spinner/spinner';

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
  const [isLoading, updateIsLoading] = useState(false);

  const getData = () => {
    updateIsLoading(true);
    //http://localhost:8080/api/items?q=
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

    console.log('get Data');
  };

  useEffect(() => {
    updateSearchQuery(buildSearchQuery(props.location.search));
  }, [props.location.search]);

  useEffect(() => {
    getData();
  }, [searchQuery]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <>{isLoading && <Spinner />}</>;
};

ContentController.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ContentController;
