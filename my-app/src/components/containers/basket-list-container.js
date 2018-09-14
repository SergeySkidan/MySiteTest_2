import React from 'react';
import { connect } from 'react-redux';
import BasketList from '../views/basket-list';
import * as basketApi from '../../api/basket-api';

import { loadSearchLayout } from '../../actions/search-layout-actions';



export default class BasketListContainer extends React.Component{


  render() {
    function estimate() {
      var c;
    var f = basketApi.getBaskets();
for (var i = 0; i < f.length; i++) {
c +=f[i].price
}
alert('итого: '+ c);
}
    return (
      <BasketList baskets={basketApi.getBaskets()} deleteBasket={basketApi.deleteBasket} estimate = {estimate} />

    );
  }
};


 function mapStateToProps(state) {
     const { baskets } = state;
     return {
         baskets
     };
 }

 const connectedBasketListContainer = connect(mapStateToProps)(BasketListContainer);
 export { connectedBasketListContainer as BasketListContainer };
