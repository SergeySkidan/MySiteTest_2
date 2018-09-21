import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as productApi from '../api/product-api';

import { userActions } from '../actions';

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
       this.state = {
          product: {
              id: '',
              name: '',
              image: '',
              text: '',
              price: ''
          },
          submitted: false
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
      const { name, value } = event.target;
      const { product } = this.state;
      this.setState({
          product: {
              ...product,
              [name]: value
          }
      });
  }

  handleSubmit(event) {
      event.preventDefault();
      this.setState({ submitted: true });
      const { product } = this.state;
      const { dispatch } = this.props;
      if (product.id && product.name && product.image && product.text&& product.price) {
          productApi.addProduct(product);
      }
  }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
      const { addproduct  } = this.props;
      const { product, submitted } = this.state;

      const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>Вы вошли как: {user.firstName}!</h3>
                <h5>Все зарегистрированные пользователи:</h5>
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

                  <div className="col-md-6 col-md-offset-3">
                      <h2>Добавить продукт</h2>
                      <form name="form" onSubmit={this.handleSubmit}>
                          <div className={'form-group' + (submitted && !product.id ? ' has-error' : '')}>
                              <label htmlFor="id">Код продукта</label>
                              <input type="text" className="form-control" name="id" value={product.id} onChange={this.handleChange} />
                              {submitted && !product.id &&
                                  <div className="help-block">Код продукта не введен</div>
                              }
                          </div>
                          <div className={'form-group' + (submitted && !product.name ? ' has-error' : '')}>
                              <label htmlFor="name">Группа товаров</label>
                              <input type="text" className="form-control" name="name" value={product.name} onChange={this.handleChange} />
                              {submitted && !product.name &&
                                  <div className="help-block">Группа товаров не введена</div>
                              }
                          </div>
                          <div className={'form-group' + (submitted && !product.image ? ' has-error' : '')}>
                              <label htmlFor="image">Адресс фото</label>
                              <input type="text" className="form-control" name="image" value={product.image} onChange={this.handleChange} />
                              {submitted && !product.image &&
                                  <div className="help-block">Адресс фото не добавлен</div>
                              }
                          </div>
                          <div className={'form-group' + (submitted && !product.text ? ' has-error' : '')}>
                              <label htmlFor="text">Описание</label>
                              <input type="text" className="form-control" name="text" value={product.text} onChange={this.handleChange} />
                              {submitted && !product.text &&
                                  <div className="help-block">Описание не введено</div>
                              }
                          </div>
                          <div className={'form-group' + (submitted && !product.price ? ' has-error' : '')}>
                              <label htmlFor="price">Цена</label>
                              <input type="price" className="form-control" name="price" value={product.price} onChange={this.handleChange} />
                              {submitted && !product.price &&
                                  <div className="help-block">Цена не введена</div>
                              }
                          </div>
                          <div className="form-group">
                              <button >Добавить продукт</button>
                              {addproduct &&
                                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                              }
                              <Link to="/login" className="btn btn-link">Отмена</Link>
                          </div>
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
