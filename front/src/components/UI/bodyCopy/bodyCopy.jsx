import React from 'react';
import PropTypes from 'prop-types';
import { splitText } from '../../../utils/splitText';

const bodyCopy = (props) => (
  <div className={props.className}>
    <h3>{props.title}</h3>
    <div>{splitText(props.description)}</div>
  </div>
);

bodyCopy.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default bodyCopy;
