import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product.js";
import { getAllProducts } from "../actions/productAction.js";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

export default function Homescreen() {
  const dispatch = useDispatch();

  const productsstate = useSelector(state => state.getAllProductsReducer)

  const { products, error, loading } = productsstate;

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error='Something went wrong'/>
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-3 m-3" key={product._id}>
                <Product product={product} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
