import React from 'react';
import MeliData from '../../../contentData/contentData';
import startSearch from '../../../assets/start_search.svg';
import classes from './start.section.module.css';

const StartSection = () => {
  const helpDots = MeliData
    .CONTENT.START_SEARCHING.HELP_TEXT.map((text) => (
      <li key={text} className="startSection__item">{text}</li>
    ));

  return (
    <div className={classes['start-section__container']}>
      <div className={classes['start-section__logo']}>
        <object data={startSearch} aria-label="Search Logo" />
      </div>
      <div className={classes['start-section__text']}>
        <h2>{MeliData.CONTENT.START_SEARCHING.HEADING}</h2>
        <ul className="startSection__list">{helpDots}</ul>
      </div>

    </div>
  );
};

export default StartSection;
