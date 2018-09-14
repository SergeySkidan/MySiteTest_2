import { combineReducers } from 'redux';

// Reducers
import productReducer from './product-reducer';
import basketReducer from './basket-reducer';
import leskaReducer from './leska-reducer';
import searchLayoutReducer from './search-layout-reducer';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';


// Combine Reducers
const reducers = combineReducers({
  authentication,
  registration,
  users,
  alert,
    productState: productReducer,
    basketState: basketReducer,
    leskaState: leskaReducer,
    searchLayoutState: searchLayoutReducer



});
//
 export default reducers;
// import { combineReducers } from 'redux';
//
// import { authentication } from './authentication.reducer';
// import { registration } from './registration.reducer';
// import { users } from './users.reducer';
// import { alert } from './alert.reducer';
//
// const rootReducer = combineReducers({
//   authentication,
//   registration,
//   users,
//   alert
// });
//
// export default rootReducer;
