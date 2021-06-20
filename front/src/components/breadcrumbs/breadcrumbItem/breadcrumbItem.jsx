import React from 'react';
import PropTypes from 'prop-types';
import chevron from '../../../assets/chevron.svg';

const BreadcrumbItem = (props) => (
  <li>
    {props.name}
  </li>
);

BreadcrumbItem.propTypes = {
  name: PropTypes.string.isRequired,
  lastItem: PropTypes.bool.isRequired,
};

export default BreadcrumbItem;
