import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classes from './searchController.module.css';
import HeaderContent from '../../components/header/header';

const SearchController = (props) => {
  const initialState = {
    query: '',
  };

  const [state, updateState] = useState({ ...initialState });

  const inputChangedHandler = (event) => {
    const oldQuery = state.query;
    const newQuery = event.target.value;

    if (oldQuery !== newQuery) {
      updateState(() => ({
        query: event.target.value,
      }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (state.query.length > 0) {
      props.history.push(`/items?search=${state.query}`);
    }
  };

  return (
    <header id="header" className={classes.searchController} role="banner">
      <HeaderContent
        submit={submitHandler}
        inputValue={state.query}
        changeInputValue={
          (event) => inputChangedHandler(event)
        }
      />
    </header>
  );
};

SearchController.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SearchController);
