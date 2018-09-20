import { combineReducers } from 'redux';

// Reducers
import productReducer from './product-reducer';
import basketReducer from './basket-reducer';
import searchLayoutReducer from './search-layout-reducer';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';



const reducers = combineReducers({
  authentication,
  registration,
  users,
  alert,
  productState: productReducer,
  basketState: basketReducer,
  searchLayoutState: searchLayoutReducer
});

 export default reducers;
