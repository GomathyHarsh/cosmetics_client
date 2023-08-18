import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const {loading,error}=loginState

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []); //if login user already present in localstorage then redirect to home page directly

  function login() {
    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">
          <h2 className="text-center m-2">Login</h2>
          {loading && (<Loading />)}
          {error&& (<Error error="Invalid Credentials"/>)}
          <div>
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            <button onClick={login} className="btn mt-3 mb-3">
              LOGIN
            </button>
            <br />
            <a href="/register" style={{ color: "black" }}>
              CLICK HERE TO REGISTER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
