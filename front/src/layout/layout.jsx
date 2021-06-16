import React from 'react';
import PropTypes from 'prop-types';

import SearchController from '../controllers/searchController/searchController';

const Layout = (props) => {
  return (
    <>
      <SearchController />
      <main>{props.children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
