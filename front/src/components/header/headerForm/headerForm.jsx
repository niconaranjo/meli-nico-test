import React from 'react';
import PropTypes from 'prop-types';
import MeliData from '../../../contentData/contentData';

import searchLogo from '../../../assets/ic_Search.png';

function headerForm({
  action, onSubmit, inputValue, onChange, className,
}) {
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      action={action}
      method="GET"
      role="search"
    >
      <input
        type="text"
        aria-label={MeliData.NAV_HEADER.ARIA_LABEL}
        name="search"
        placeholder={MeliData.NAV_HEADER.PLACE_HOLDER}
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="off"
        aria-activedescendant="#header"
        tabIndex="0"
        value={inputValue}
        onChange={onChange}
      />
      <button type="submit" aria-label={MeliData.NAV_HEADER.BUTTON_LABEL}>
        <img src={searchLogo} alt="search-logo" />
      </button>
    </form>
  );
}

headerForm.propTypes = {
  action: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default headerForm;
