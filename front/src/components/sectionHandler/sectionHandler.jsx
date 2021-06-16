import React from 'react';
import PropTypes from 'prop-types';

import StartSection from '../UI/sections/start.sections';
import classes from './sectionHandler.module.css';

const SectionHandler = (props) => (
  //const cssClass = props.className.join()
  <section className={classes['search-section']}>
    {!props.hasSearch && <StartSection />}
    {props.hasSearch && props.children }
  </section>
);

SectionHandler.propTypes = {
  hasSearch: PropTypes.bool,
  children: PropTypes.element,
};

SectionHandler.defaultProps = {
  hasSearch: false,
  children: null,
};

export default SectionHandler;
