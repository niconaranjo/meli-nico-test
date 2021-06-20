import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './breadcrumbItem/breadcrumbItem';

import classes from './breadcrumb.module.css';

const Breadcrumbs = (props) => {
  const categories = new Set([...props.categories]);

  const handleBreadcrumb = () => {
    if (categories.size === 0) return <BreadcrumbItem name={props.search} />;
    categories.add(props.search);

    return Array.from(categories).map((category, index) => (
      <BreadcrumbItem
        key={`${category}`}
        name={category}
        lastItem={categories.size - 1 === index}
      />
    ));
  };

  return <ol className={classes.breadcrumb}>{handleBreadcrumb()}</ol>;
};

Breadcrumbs.propTypes = {
  categories: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
};

export default Breadcrumbs;
