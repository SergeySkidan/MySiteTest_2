import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../views/product-list';
import * as productApi from '../../api/product-api';

import { loadSearchLayout } from '../../actions/search-layout-actions';

export class ProductListContainer extends React.Component{

  componentDidMount = () => {
    productApi.getProducts();
    this.props.dispatch(loadSearchLayout('products', 'Product Results'));
  }

  render() {

    return (

      <ProductList products={this.props.products}/>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    products: store.productState.products
  };
};

export default connect(mapStateToProps)(ProductListContainer);
