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

      function estimate() {
      var c;
      var f = basketApi.getBaskets();
      for (var i = 0; i < f.length; i++) {
        c +=f[i].price
      }
      alert('итого: '+ this.props.baskets);
      }

    return (
      <BasketList baskets={this.props.baskets} deleteBasket={basketApi.deleteBasket} estimate = {estimate} />
    );
  }
};

const mapStateToProps = function(store) {
  return {
    baskets: store.basketState.baskets
  };
}
export default connect(mapStateToProps)(BasketListContainer);
