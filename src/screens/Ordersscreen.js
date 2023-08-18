import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
export default function Ordersscreen() {

  
  const dispatch= useDispatch()
  const orderstate= useSelector((state) => state.getUserOrderReducer)
  const {orders,error,loading} = orderstate
  useEffect(()=>{
    dispatch(getUserOrders())

  },[])

  return (
    <div>
    <h2>My Orders</h2>
    <hr/>
    <div className="row justify-content-center">
      {loading && <Loading />}
      {error && <Error error="User already registered" />}
      {orders &&
        orders.map((order) => {
          return (
            <div
              className="col-md-8 m-2 p-1"
              style={{ backgroundColor: "deeppink", color: "black" }}
            >
              <div className=".flex-container" style={{ display: "flex" }}>
                <div
                  className="text-left w-100 m-2"
                  style={{ fontSize: "10px" }}
                >
                  <h2 style={{ fontSize: "25px" }}>Items</h2>
                  <hr />
                  {order.orderItems.map((item) => {
                    return (
                      <div>
                        <p style={{ fontSize: "20px" }}>
                          {item.name}[{item.size}]*{item.quantity} :
                          {item.price}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="text-left w-100 m-2"
                  
                >
                  <h2 style={{ fontSize: "25px" }}>Address</h2>
                  <hr />
                  <p>Street : {order.shippingAddress.street}</p>
                  <p>City : {order.shippingAddress.city}</p>
                  <p>Country : {order.shippingAddress.country}</p>
                  <p>Pincode : {order.shippingAddress.pincode}</p>
                </div>
                <div className="text-left w-100 m-2">
                  <h2 style={{ fontSize: "25px" }}>Order Info</h2>
                  <hr />
                  <p>Order Amount: {order.orderAmount}</p>
                  <p>Date: {order.createdAt.substring(0, 10)}</p>
                  <p>Transaction ID: {order.transactionId}</p>
                  <p>Order ID: {order._id}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  </div>
);
}