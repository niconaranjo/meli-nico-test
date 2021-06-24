import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from './searchItem/searchItem';

const SearchListItem = (props) => props.items.map((item, index) => (
  <SearchItem
    key={item.id}
    item={item}
    item-index={index}
    length={props.items.length}
  />
));

SearchListItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SearchListItem;
