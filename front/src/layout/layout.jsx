import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SearchController from '../controllers/searchController/searchController';

class Layout extends PureComponent {

  render() {
    console.log(this.props)
    return (
      <>
        <SearchController />
        <main>{this.props.children}</main>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
