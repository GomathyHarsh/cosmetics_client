import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../actions/productAction";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Productslist() {
  const dispatch = useDispatch();

  const productssstate = useSelector((state) => state.getAllProductsReducer);
  const { products, error, loading } = productssstate;

  useEffect(() => {
    dispatch(getAllProducts());
  },[]);

  return (
    <div>
      <h2>Products List</h2>

      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Product Id</th>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => {
              return (
                <tr>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>
                     200ml:{product.prices[0]["200ml"]} <br />
                     500ml:{product.prices[0]["500ml"]} <br />
                     700ml:{product.prices[0]["700ml"]}
                    
                  </td>
                  <td>{product.category}</td>
                  <td>
                    <i
                      className="fa fa-trash m-1"
                      onClick={() => {
                        dispatch(deleteProduct(product._id));
                      }}
                    ></i>
                    <Link to={`/admin/editproduct/${product._id}`}>
                      <i className="fa fa-edit m-1"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
