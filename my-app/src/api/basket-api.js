import axios from 'axios';
import { store } from './../helpers';
import { getBasketsSuccess, deleteBasketSuccess } from '../actions/basket-actions';


export function getBaskets() {

    localStorage.BasketList
    var StorageList=JSON.parse(localStorage.getItem("BasketList")||"[]")
//если корзина пуста
        if(StorageList.length == 0){
          StorageList =[];
          }
      return StorageList;
}

export function deleteBasket() {
//получаем localStorage.BasketList
       localStorage.BasketList
       var StorageList = JSON.parse(localStorage.getItem("BasketList")||"[]")
//tempProps получает массив и в нулевом индексе объект
       var tempProps = this.props.baskets;
//достаем из массива объект
       var tempBasket = tempProps[0];
//ищем совпадения в листе с удаленным объектом и удаляем его из листа
       for(var i = 0; i<StorageList.length; i++){
       if(StorageList[i].id == tempBasket.id ){
       StorageList.splice(i,1);
       }
    }
//ложим новый лист в localStorage.BasketList
   localStorage.setItem('BasketList', JSON.stringify(StorageList));

  // /* счетчик корзины */
   localStorage.BasketList
   var cauntBasket = JSON.parse(localStorage.getItem("BasketList")||"[]");
   document.getElementById('cauntAddToCart').innerHTML = cauntBasket.length;

   this.setState({baskets: true});



}
