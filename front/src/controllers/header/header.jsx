import React from 'react';
import PropTypes from 'prop-types';
import classes from './header.module.css';

import HeaderForm from './headerForm/headerForm';
import API_URL from '../../contentData/apiUrlData';
import logo from '../../public/images/logo_mercado_libre.jpg';

function HeaderController({ submit, inputValue, changeInputValue }) {
  return (
    <div className={classes.headerContainer} role="banner">
      <img
        src={logo}
        alt="Mercado Libre Logo"
        className={classes.headerContainer__image}
      />
      <HeaderForm
        className={classes.headerContainer__form}
        action={API_URL.ITEMS}
        onSubmit={submit}
        inputValue={inputValue}
        onChange={changeInputValue}
      />
    </div>
  );
}

HeaderController.propTypes = {
  submit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};

export default HeaderController;
