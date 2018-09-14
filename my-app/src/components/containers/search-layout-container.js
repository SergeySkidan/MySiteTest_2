import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/search-layout';

const mapStateToProps = function(store) {

  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0;

  if (searchType === 'products') {
    totalResults = store.productState.products.length;
  } else if (searchType === 'leskas') {
    totalResults = store.leskaState.leskas.length;
  }else if (searchType === 'baskets') {
    totalResults = store.basketState.baskets.length;
  }
  
  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults
  };

};

export default connect(mapStateToProps)(SearchLayout);
