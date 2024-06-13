import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <h1>AVD University</h1>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="password" />
      {props.isRegistered === false ? (
        <input type="password" placeholder="confirm password" />
      ) : null}
      {/* or using empassan && operator and delete the null or adding (!) in front ex. "!props" and then the && */}
      <button type="submit">
        {props.isRegistered ? "Login" : "Register"}{" "}
      </button>
      {/* <button type="submit">Login</button> */}
    </form>
  );
}

export default Login;
