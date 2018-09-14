import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../views/product-list';
import * as productApi from '../../api/product-api';

import { loadSearchLayout } from '../../actions/search-layout-actions';

export default class ProductListContainer extends React.Component{

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

function mapStateToProps(state) {
    const { products } = state;
    return {
        products
    };
}

const connectedProductListContainer = connect(mapStateToProps)(ProductListContainer);
export { connectedProductListContainer as ProductListContainer };
