import React from 'react';
import * as productApi from '../../api/product-api';
import * as leskaApi from '../../api/leska-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import SearchForm from '../views/search-form';
import filterProducts from '../layouts/main-layout'

class SearchFormContainer extends React.Component{

  search = (event) => {
    event.preventDefault();

    let query = this.refs.child.getQuery();

    if (this.props.searchType === 'products') {
      productApi.searchProducts(query);
    } else if (this.props.searchType === 'leskas') {
      leskaApi.searchLeskas(query);
    }
}

  render() {
    return (
      <SearchForm search={this.search} ref="child" />
    );
  }

};

export default SearchFormContainer;
