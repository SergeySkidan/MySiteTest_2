import React from 'react';
import * as productApi from '../../api/product-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import SearchForm from '../views/search-form';
import filterProducts from '../layouts/main-layout'

class SearchFormContainer extends React.Component{

  search = (event) => {
    event.preventDefault();

    let query = this.refs.child.getQuery();

    if (this.props.searchType === 'products') {
      productApi.searchProducts(query);
    }
}
  render() {
    return (
      <SearchForm search={this.search} ref="child" />
    );
  }
};
export default SearchFormContainer;
