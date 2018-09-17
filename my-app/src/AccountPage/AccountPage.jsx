import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
       this.state = {
          newProduct: {
              id: '',
              name: '',
              image: '',
              text: '',
              price: ''
          }
        }
    this.handleInput = this.handleInput.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }
  handleInput(key, e) {
    var state = Object.assign({}, this.state.newProduct);
    state[key] = e.target.value;
    this.setState({newProduct: state });
  }
  
  handleAddProduct(e) {
    e.preventDefault();

    const { product } = this.state.newProduct;
    alert(this.state.newProduct);
  //product.id = Number(product.id);
  //  product.price = Number(product.price);

   fetch( 'http://localhost:3001/products', {
       method:'post',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(product)
   })
   .then(response => {
       return response.json();
   })
   .then( data => {
       this.setState((prevState)=> ({
           products: prevState.products.concat(data),
           currentProduct : data
       }))
   })
 }


    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {

        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Вы вошли как: {user.firstName}!</h1>
                <h3>Все зарегистрированные пользователи:</h3>
                {users.loading && <em>Загрузка рользователей...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                  : <span> - <a onClick={this.handleDeleteUser(user.id)}>Удалить</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Выйти</Link>
                </p>



            <div>
              <h2> Добавить продукт </h2>
                <form onSubmit={this.handleAddProduct}>
                <label> Id:
                 <input type="text" onChange={(e)=>this.handleInput('id',e)} />
                </label>

                <label> Name:
                  <input type="text" onChange={(e)=>this.handleInput('name',e)} />
                </label>

                <label> Image:
                  <input type="const url = require('url');" onChange={(e)=>this.handleInput('image',e)} />
                </label>

                <label> Text:
                  <input type="text" onChange={(e)=>this.handleInput('text',e)} />
                </label>

                <label> Price:
                  <input type="text" onChange={(e)=>this.handleInput('price',e)} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>


          </div>



        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedAccountPage = connect(mapStateToProps)(AccountPage);
export { connectedAccountPage as AccountPage };
