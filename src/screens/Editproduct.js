import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getProductById } from "../actions/productAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Editproduct({ match }) {
  const dispatch = useDispatch();

  const [name, setname] = useState("");
  const [twohmlprice, setTwohmlprice] = useState();
  const [fivehmlprice, setFivehmlprice] = useState();
  const [sevenhmlprice, setSevenhmlprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getproductbyidstate = useSelector((state) => state.getProductByIdReducer);
  const { product, error, loading } = getproductbyidstate;
  const editproductstate = useSelector((state) => state.editProductReducer);
  const { editloading, editerror, editsuccess } = editproductstate;

  useEffect(() => {
    if (product) {
      if (product._id == match.params.productid) {
        setname(product.name);
        setdescription(product.description);
      setcategory(product.category);
       setTwohmlprice(product.prices[0]["200ml"]);
        setFivehmlprice(product.prices[0]["500ml"]);
        setSevenhmlprice(product.prices[0]["700ml"]);
       
        setimage(product.image);
      } else {
        dispatch(getProductById(match.params.productid));
      }
    } else {
      dispatch(getProductById(match.params.productid));
    }
  }, [product, dispatch]);

  function formHandler(e) {
    e.preventDefault();
    const editedproduct = {
      _id: match.params.productid,
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
    dispatch(editProduct(editedproduct));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Edit Product</h1>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && <Success success="Product details edited successfully" />}
        {editloading && <Loading />}

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
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
}