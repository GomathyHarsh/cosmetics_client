import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getAllProductsReducer } from "./reducers/productReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";
import { registerUserReducer,loginUserReducer,getAllUsersReducer } from "./reducers/userReducer";
import {placeOrderReducer,getUserOrderReducer,getAllOrdersReducer} from './reducers/orderReducer';
import {addProductReducer,getProductByIdReducer,editProductReducer} from './reducers/productReducers';

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  cartReducer: cartReducer,
  registerUserReducer:registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer:placeOrderReducer,
  getUserOrderReducer: getUserOrderReducer,
  addProductReducer:addProductReducer,
  getAllUsersReducer:getAllUsersReducer,
  getAllOrdersReducer:getAllOrdersReducer,
  getProductByIdReducer:getProductByIdReducer,
  editProductReducer:editProductReducer
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
  const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
  cartReducer :{
    cartItems:cartItems
  },
  loginUserReducer: {
    currentUser:currentUser
  }
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
