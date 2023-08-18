import axios from "axios";
import { config } from "../config";



export const getAllProducts=()=>async dispatch=>{

dispatch({type:'GET_PRODUCTS_REQUEST'})

try{
    const response = await axios.get(`${config.API}/api/products/getallproducts`)
    console.log(response);
    dispatch({type:'GET_PRODUCTS_SUCCESS',payload:response.data})
} catch (error){
    dispatch({type:'GET_PRODUCTS_FAILED', payload: error })
}


}

export const filterProducts = (searchkey, category) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  try {
    var filteredProducts;
    const response = await axios.get(
      `${config.API}/api/products/getallproducts`
    );
    filteredProducts = response.data.filter((product) =>
      product.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filteredProducts= response.data.filter(
        (product) => product.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredProducts });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_FAILED", payload: error });
  }
};


export const addProduct = (product) => async (dispatch) => {
    dispatch({ type: "ADD_PRODUCTS_REQUEST" });
    try {
      const response = await axios.post(
        `${config.API}/api/products/addproduct`,
        {
          product,
        }
      );
      console.log(response);
      dispatch({ type: "ADD_PRODUCTS_SUCCESS" });
    } catch (error) {
      dispatch({ type: "ADD_PRODUCTS_FAILED", payload: error });
    }
  };


  export const deleteProduct = (productid) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${config.API}/api/products/deleteproduct`,
        {
          productid,
        }
      );
      alert("Product Deleted Successfully");
      console.log(response);
      window.location.reload();
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  export const getProductById = (productid) => async (dispatch) => {
    dispatch({ type: "GET_PRODUCTBYID_REQUEST" });
    try {
      const response = await axios.post(`${config.API}/api/products/getproductbyid`, {
        productid,
      });
      console.log(response);
      dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: error });
    }
  };

  export const editProduct = (editedproduct) => async (dispatch) => {
    dispatch({ type: "EDIT_PRODUCT_REQUEST" });
    try {
      const response = await axios.post(
        `${config.API}/api/products/editproduct`,
        {
          editedproduct,
        }
      );
      console.log(response);
      dispatch({ type: "EDIT_PRODUCT_SUCCESS" });
      window.location.href = "/admin/productslist";
    } catch (error) {
      dispatch({ type: "EDIT_PRODUCT_FAILED", payload: error });
    }
  };