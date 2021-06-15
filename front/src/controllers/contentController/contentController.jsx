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
      items: {},
      author: {},
      categories: [],
    };
  }

  componentDidMount() {
    this.getData();
    console.log(this.state)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.searchWord !== this.state.searchWord)
    if (nextState.searchWord !== this.state.searchWord) {
      return true;
    }

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

  getSnapshotBeforeUpdate(prevProps) {
    return {
      propsChanged:
      ContentController
        .buildSearchQuery(prevProps.location.search)
        !== ContentController
          .buildSearchQuery(this.props.location.search),
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('updated', snapshot.propsChanged)
    if (snapshot.propsChanged) {
      this.getData();
    }
  }

  getData() {
    //http://localhost:8080/api/items?q=
    axios.get(`http://localhost:8080/api/items?q=${this.state.searchWord}`)
      .then((response) => {
        const { data } = response;

        this.setState(() => ({
          items: data.items,
          author: data.autor,
          categories: data.categories,
        }));
      });
  }

  render() {
    return <h1>hi</h1>;
  }
}

ContentController.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ContentController;
