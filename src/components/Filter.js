import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts} from "../actions/productAction";

export default function Filter() {
  const dispatch = useDispatch();

  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");

  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-50">
          <input
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            style={{borderColor:"black"}}
            value={searchkey}
            type="text"
            className="form-control w-100"
            placeholder="search shawarmas"
            
          />
        </div>
        {/* <div className="col-md-3 w-50">
          <select
            className="form-control w-100 mt-2"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Moisturizers">Moisturizers</option>
            <option value="Face wash">Face wash</option>
            <option value="Hair serum">Hair serum</option>
          </select>
        </div> */}
        <div className="col-md-3 w-50">
          <button
            className="btn w-100 mt-2"
            onClick={() => {
              dispatch(filterProducts(searchkey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}