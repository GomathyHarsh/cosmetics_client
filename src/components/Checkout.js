import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {useDispatch, useSelector} from 'react-redux';
import { placeOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";



export default function Checkout({ subtotal }) {

  const orderstate=useSelector((state) => state.placeOrderReducer)
  const {loading,error,success} =orderstate

  const dispatch= useDispatch()
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token,subtotal))
  }
  return (
    <div>
      {loading && (<Loading/>)}
      {error && (<Error error='Something went wrong'/>)}
      {success && (<Success success='Your Order placed successfully'/>)}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        currency="INR"
        stripeKey="pk_test_51NeynqSFSKenJz88v9iwXiKCXCiz3Cx7sraueH1tUZiYqfy8CVusMligHjFReOjiP3pm4n5mXVy1nGOgrwTLwkP200onQ2upjE"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
