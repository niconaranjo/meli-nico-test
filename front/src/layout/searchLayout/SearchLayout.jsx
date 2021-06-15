import React from 'react';
import classes from './SearchLayout.module.css';
import HeaderController from '../../controllers/header/header';

class SearchLayout extends React.Component {
  constructor() {
    super();

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

    console.log(this);
  }

  render() {
    return (
      <header id="header" className={classes.searchLayout} role="banner">
        <HeaderController
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

export default SearchLayout;
