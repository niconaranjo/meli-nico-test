import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ContentController extends Component {
  static buildSearchQuery(queryString) {
    if (queryString) {
      return queryString.split('=')[1];
    }
    return '';
  }

  constructor(props) {
    super(props);

    this.state = {
      searchWord: ContentController.buildSearchQuery(
        this.props.location.search,
      ),
      itemsSearched: {},
      author: {},
      categories: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  shouldComponentUpdate(nextProps) {
    const nextSearch = ContentController.buildSearchQuery(
      nextProps.location.search,
    );
    const prevSearch = ContentController.buildSearchQuery(
      this.props.location.search,
    );

    if (nextSearch !== prevSearch) {
      this.setState(() => ({
        searchWord: nextSearch,
      }));
      return true;
    }
    return false;
  }

  componentDidUpdate(prevState) {
    console.log(prevState, this.state)
    if (prevState.searchWord !== this.state.searchWord) {
      this.getData();
    }
  }

  getData() {
    //http://localhost:8080/api/items?q=
    axios.get(`http://localhost:8080/api/items?q=${this.state.searchWord}`)
      .then((response) => {
        const { data } = response;

        this.setState(() => ({
          itemsSearched: data.items,
          author: data.autor,
          categories: data.categories,
        }));
      });
  }

  render() {
    console.log(this.state)
    return <h1>hi</h1>;
  }
}

ContentController.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ContentController;
