import React from 'react';
import PropTypes from 'prop-types';
import MeliData from '../../../contentData/contentData';
import startSearch from '../../../assets/start_search.svg';
import classes from './start.section.module.css';

const StartSection = (props) => {
  let helpDots = [];

  if (props.error) {
    helpDots = MeliData.CONTENT.START_SEARCHING.HELP_TEXT_ERROR.map((text) => (
      <li key={text} className="startSection__item">
        {text}
      </li>
    ));
  } else {
    helpDots = MeliData.CONTENT.START_SEARCHING.HELP_TEXT.map((text) => (
      <li key={text} className="startSection__item">
        {text}
      </li>
    ));
  }

  return (
    <div className={classes['start-section__container']}>
      <div className={classes['start-section__logo']}>
        <img src={startSearch} alt="Search Logo" />
      </div>
      {props.error
      && (
        <div className={classes['start-section__text']}>
          <h2>{MeliData.CONTENT.START_SEARCHING.HEADING_ERROR}</h2>
          <ul className="startSection__list">{helpDots}</ul>
        </div>
      )}
      {!props.error
      && (
        <div className={classes['start-section__text']}>
          <h2>{MeliData.CONTENT.START_SEARCHING.HEADING}</h2>
          <ul className="startSection__list">{helpDots}</ul>
        </div>
      )}
    </div>
  );
};

StartSection.propTypes = {
  error: PropTypes.bool,
};

StartSection.defaultProps = {
  error: false,
};

export default StartSection;
