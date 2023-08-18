import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
const Registerscreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const registerState = useSelector((state) => state.registerUserReducer);
  const { loading, error, success } = registerState;

  const dispatch = useDispatch();
  
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
  };
 

  function register() {
    if (password !== cpassword) {
      alert("Passwords not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">
        {loading && <Loading />}
          {success && (
            <Success
              success="User Registered Successfully"
              resetForm={resetForm}
            />
          )}
          {error && <Error error={error} />}
          <h2 className="text-center m-2">Register</h2>
          <div>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
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
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
              required
            />
            <button onClick={register} className="btn mt-3 mb-3">
              REGISTER
            </button>
            <br />
            <a href="/login" style={{ color: "black" }}>
              CLICK HERE TO LOGIN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
