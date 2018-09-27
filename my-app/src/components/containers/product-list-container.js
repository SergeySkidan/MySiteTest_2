import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../views/product-list';
import * as productApi from '../../api/product-api';
import * as basketApi from '../../api/basket-api';

import { loadSearchLayout } from '../../actions/search-layout-actions';

var count = 0;
var queryProducts= '';
export class ProductListContainer extends React.Component{


  render() {
    return (
      <ProductList products={this.props.products} />
    );
  }
};

const mapStateToProps = function(store) {
  return {
    products: store.productState.products
  };
};

export default connect(mapStateToProps)(ProductListContainer);
