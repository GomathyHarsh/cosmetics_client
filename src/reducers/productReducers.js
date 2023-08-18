export const getAllProductsReducer=(state={products: []},action) =>{

    switch(action.type){
        case 'GET_PRODUCTS_REQUEST' : return{
            loading: true,
            ...state
        }
        case 'GET_PRODUCTS_SUCCESS' : return{
            loading:false,
            products:action.payload
        }
        case 'GET_PRODUCTS_FAILED' : return{
            loading:false,
            error: action.payload
            
        }
        default: return state
    }
} 

export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_PRODUCTS_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "ADD_PRODUCTS_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "ADD_PRODUCTS_FAILED":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };

  export const getProductByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_PRODUCTBYID_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "GET_PRODUCTBYID_SUCCESS":
        return {
          loading: false,
          PRODUCT: action.payload,
        };
      case "GET_PRODUCTBYID_FAILED":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };

  export const editProductReducer = (state = {}, action) => {
    switch (action.type) {
      case "EDIT_PRODUCT_REQUEST":
        return {
          editloading: true,
          ...state,
        };
      case "EDIT_PRODUCT_SUCCESS":
        return {
          editloading: false,
          editsuccess: true,
        };
      case "EDIT_PRODUCT_FAILED":
        return {
          editerror: action.payload,
          editloading: false,
        };
      default:
        return state;
    }
  };