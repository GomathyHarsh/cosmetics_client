import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";



const Product = ({ product }) => {
  const [quantity,setquantity]= useState(1);
  const [size,setsize]= useState('200ml');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const dispatch = useDispatch()
function addtocart(){
  dispatch(addToCart(product,quantity,size))
}



  return (
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div onClick={handleShow}>
      <h3>{product.name}</h3>
      <img
        src={product.image}
        className="img-fluid"
        style={{ height: "200px", width: "300px"}}
      />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <h6>Size</h6>
          <select className="form-control" value={size} onChange={(e)=>{setsize(e.target.value)}} >
            {product.size.map((size) => {
              return <option value={size}>{size}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <h6>Quantity</h6>
          <select className="form-control" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
            {Array.from(Array(10).keys()).map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
        <div className="flex-container">
            <div className="m-1 w-100">
                <h5 className="m-1">Price: {product.prices[0][size]* quantity} Rs/-</h5>
            </div>

            <div className="m-1 w-100">
                <button  className="btn" onClick={addtocart} >ADD TO CART</button>
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={product.image} className="img-fluid" style={{height:'400px'}}/>
          <p>{product.description}</p>
        </Modal.Body>

        <Modal.Footer>
         <button className="btn" onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Product;
