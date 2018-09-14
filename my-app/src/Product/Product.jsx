import React from 'react';
import './Product.css';
//для импорта переменных нужно сиавить две точки
import {menuSwith} from "../Menu/Menu";

var numberId = 50569825;
function Product(name, image, text, price) {
  numberId=1+numberId;
  this.id = numberId;
  this.name = name;
  this.image = image;
  this.text = text;
  this.price = price;
}

export var products = [];
var productAddToCart = [];
var productsFiltered = [];
var cauntAddToCart = 0;


for(var i = 0; i<1; i++){

var spinning = new Product(
'Спиннинг',
'https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18215110_52733553tmb.jpg',
'Favorite X1',
(150+(2500 - 150) * Math.random()).toFixed(0)
);

var katushka = new Product(
'Катушка',
'https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18237597_52758696tmb.jpg',
'Brain Battle 6+1',
(150+(2000 - 150) * Math.random()).toFixed(0)
);

var leska = new Product(
'Леска',
'https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18216449_52716064tmb.jpg',
'Varivas Rock Fish Premium 150m',
(50+(250 - 50) * Math.random()).toFixed(0)
);

var podsuk = new Product(
'Подсак',
'https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18211568_52731013tmb.jpg',
'Favorite Arena 1.4m складной',
(150+(350 - 150) * Math.random()).toFixed(0)
);

var signal = new Product(
'Сигнализатор',
'https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18235052_52759885tmb.jpg',
'Prologic SNZ Bite Alarm Kit 4+1',
(1500+(20000 - 1500) * Math.random()).toFixed(0)
);

var rodpod = new Product(
'Род-под',
'https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18199824_52666854tmb.jpg',
'Prologic Lux Pod 4 Rod',
(1500+(2500 - 1500) * Math.random()).toFixed(0)
);

var hook = new Product(
'Крючок',
'https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18137772_52620100tmb.jpg',
'Decoy AH-IX FLORIA 12 шт',
(50+(250 - 50) * Math.random()).toFixed(0)
);

var gruzilo = new Product(
'Грузило',
'https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18196283_52673468tmb.jpg',
'Brain Камень гр. карповое',
(15+(40 - 15) * Math.random()).toFixed(0)
);

products.push(spinning);
products.push(katushka);
products.push(leska);
products.push(podsuk);
products.push(signal);
products.push(rodpod);
products.push(hook);
products.push(gruzilo);
}



export class ProductItem extends React.Component{
  addToCart = (e) =>{
  productAddToCart.push(this.props.product);
  document.getElementById('cauntAddToCart').innerHTML = productAddToCart.length;

  }
      render() {
      const product = this.props.product;
      return (
      <div className='product-list'>
          <h4 className='product__title'>{this.props.product.name}</h4>
          <img src={this.props.product.image} alt={this.props.product.name} className='product__image'/>
          <div className='product__tips'>Модель:{this.props.product.text}</div>
          <div className='product__tips'>Цена:{this.props.product.price}</div>
          <div className='product__tips'>Код товара: {this.props.product.id}</div>
          <button onClick={(e) => this.addToCart(e)}>Добавить в корзину</button>
      </div>
    )
  }
}

  export class ProductList extends React.Component{

    render() {
    const products = this.props.products;
    const  items = products.map((product) => {
            return <ProductItem id = 'items' key={product.id} product={product}/>;
        });
  return (

      <ul>
        {items}
      </ul>


    );
  }
}






export class ProductCard extends React.Component {
  addToCart = (e) =>{
  productAddToCart.push(this.props.product);
  // for(var i =0;i<productAddToCart.length;i++){
  // alert(productAddToCart[i].id +" "+
  // productAddToCart[i].name+" "+
  // productAddToCart[i].image+" "+
  // productAddToCart[i].text+" "+
  // productAddToCart[i].price);
  // }
  document.getElementById('cauntAddToCart').innerHTML = productAddToCart.length;
  }

  render() {
    return (
      <div className='product-list'>
          <h4 className='product__title'>{this.props.product.name}</h4>
          <img src={this.props.product.image} alt={this.props.product.name} className='product__image'/>
          <div className='product__tips'>Модель:{this.props.product.text}</div>
          <div className='product__tips'>Цена:{this.props.product.price}</div>
          <div className='product__tips'>Код товара: {this.props.product.id}</div>
          <button onClick={(e) => this.addToCart(e)}>Добавить в корзину</button>
      </div>
    );
  }
}

export class ProductBoard extends React.Component {
  render() {
    var rows = [];
if(menuSwith.length != 0){
  this.props.products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(menuSwith) == -1 ) {
      return;
    }
    rows.push(<ProductCard product={product} key={product.id} />);
  });
}else{this.props.products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) == -1) {
        return;
      }
      rows.push(<ProductCard product={product} key={product.id} />);
    });
  }

    return (
        <tbody>{rows}</tbody>
    );


  }
}

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.onUserInput(
    this.filterTextInput.value

    );
  }

  render() {

    return (
      <form>


        <input id = 'inputSearchBar'
          type="text"
          placeholder="Search..."
          value={this.props.filterext}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange}

        />
      </form>
    );
  }
}

export class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    filterText: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    }
  handleUserInput(filterText) {
    this.setState({
      filterText: filterText,

    });
  }
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ProductBoard
          products={this.props.products}
          filterText={this.state.filterText}
        />

      </div>
    );
  }
}














export default (products);
