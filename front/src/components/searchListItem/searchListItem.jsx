import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from './searchItem/searchItem';

const SearchListItem = (props) => {
  const clickHandler = () => {

  };

  return (
    props.items.map((item) => (
      <SearchItem
        key={item.id}
        item={item}
        clickHandler={() => clickHandler()}
      />
    ))
  );
};

SearchListItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SearchListItem;
