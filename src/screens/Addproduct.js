import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../actions/productAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Addproduct() {
  const [name, setname] = useState("");
  const [twohmlprice, setTwohmlprice] = useState();
  const [fivehmlprice, setFivehmlprice] = useState();
  const [sevenhmlprice, setSevenhmlprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const addProductstate = useSelector((state) => state.addProductReducer);
  const { success, error, loading } = addProductstate;

  function formHandler(e) {
    e.preventDefault();
    const product = {
      name,
      image,
      description,
      category,
      prices: {
        "200ml": twohmlprice,
    "500ml": fivehmlprice,
    "700ml" :sevenhmlprice
        
      },
    };
    console.log(product);
    dispatch(addProduct(product));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Add product</h1>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Product added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="200ml price"
            value={twohmlprice}
            onChange={(e) => {
                setTwohmlprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="500ml price"
            value={fivehmlprice}
            onChange={(e) => {
                setFivehmlprice(e.target.value);
            }}
          />
           <input
            className="form-control"
            type="text"
            placeholder="700ml price"
            value={sevenhmlprice}
            onChange={(e) => {
              setSevenhmlprice(e.target.value);
            }}
          />
         
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}