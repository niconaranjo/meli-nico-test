import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classes from './searchController.module.css';
import HeaderContent from '../../components/header/header';

class SearchController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
  }

  inputChangedHandler(event) {
    const oldQuery = this.state.query;
    const newQuery = event.target.value;

    if (oldQuery !== newQuery) {
      this.setState(() => ({
        query: event.target.value,
      }));
    }
  }

  submitHandler(event) {
    event.preventDefault();

    if (this.state.query.length > 2) {
      this.props.history.push(`/items?search=${this.state.query}`);
    }
  }

  render() {
    return (
      <header id="header" className={classes.searchController} role="banner">
        <HeaderContent
          submit={this.submitHandler}
          inputValue={this.state.query}
          changeInputValue={
            (event) => this.inputChangedHandler(event)
          }
        />
      </header>
    );
  }
}

SearchController.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SearchController);
