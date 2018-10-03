import React from 'react';
import { connect } from 'react-redux';
import BasketList from '../views/basket-list';
import * as basketApi from '../../api/basket-api';
import { store } from './../../helpers/store';

import { loadSearchLayout } from '../../actions/search-layout-actions';

class BasketListContainer extends React.Component{

  componentDidMount = () => {
    basketApi.getBaskets();
    this.props.dispatch(loadSearchLayout('baskets', 'Basket Results'));

  }

  render() {


    return (
      <BasketList baskets={this.props.baskets} deleteBasket={basketApi.deleteBasket} />
    );
  }
};

const mapStateToProps = function(store) {
  return {
    baskets: store.basketState.baskets
  };
}
export default connect(mapStateToProps)(BasketListContainer);
