import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Addproduct from "./Addproduct";
import Editproduct from "./Editproduct";
import Orderslist from "./Orderslist";
import Productslist from "./Productslist";
import Userslist from "./Userslist";

export default function AdminScreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser,loading } = userstate;

  useEffect(() => {
    if (!loading && currentUser && currentUser.isAdmin === true) {
      window.location.href = "/";
    }
  }, [currentUser, loading]);
console.log(currentUser)
  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={"/admin/userslist"}>Users List</Link>
            </li>
            <li>
              <Link to={"/admin/productslist"}>Products List</Link>
            </li>
            <li>
              <Link to={"/admin/addproduct"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"}>Orders List</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route
              path="/admin/productslist"
              component={Productslist}
              exact
            />
            <Route path="/admin/addproduct" component={Addproduct} exact />
            <Route
              path="/admin/editproduct/:productid"
              component={Editproduct}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}