import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToCart} from '../actions/cartActions';
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

const Cartscreen = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x,item) =>x+item.price,0);
  const dispatch = useDispatch() ;

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 style={{ fontsize: "40px"}}>My Cart </h1>

          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left w-100 m-1">
                  <h3>
                    {item.name}[{item.size}]
                  </h3>
                  <h5>
                    Price:{item.quantity}*{item.prices[0][item.size]} ={" "}
                    {item.price}
                  </h5>
                  <h5 style={{display:'inline'}}>Quantity:</h5>
                  <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.size))}}></i>
                  <b>{item.quantity}</b>
                  <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.size))}}></i>
                  <hr/>
                </div>

                <div className="w-100 m-1">
                      <img src={item.image} style={{height:'90px',width:'90px'}} alt=""/>

                </div>

                <div className="w-100 m-1">
                <i className="fa fa-trash mt-5" aria-hidden="true" onClick={() => {dispatch(deleteFromCart(item))}} ></i>

                </div>

              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h4 style={{fontSize:'45px'}}>SubTotal:{subtotal}/-</h4>
          <Checkout subtotal={subtotal}/>
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;
