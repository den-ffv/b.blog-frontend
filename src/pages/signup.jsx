import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="conteiner">
        {/* <button onClick={goBack}>Go Back</button> */}
        <Link to={"/"}>
          <div className="logo">
            <p className="logo__text">b.blog</p>
          </div>
        </Link>
        <h1 className="auth__title">Create Account</h1>
        <p className="auth__text">Please enter your detalis</p>
        <form className="auth__form">
          <input className="auth__input" type="name" placeholder="Name" />
          <input className="auth__input" type="email" placeholder="Email" />
          <input
            className="auth__input"
            type="password"
            placeholder="Password"
          />
          <button className="auth__button">Sign Up</button>
          or
        <button className="auth__button">Log in with Google </button>
        </form>
        <p className="auth__text">
          {"Alreaby have an account? "}
          <Link to={"/auth/login"}>Log In</Link>
          
        </p>
      </div>
    </div>
  );
}

export default SignUp;
