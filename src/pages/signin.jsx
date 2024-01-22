import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="conteiner">
      {/* <button onClick={goBack}>Go Back</button> */}
      <Link to={"/"}>
        <div className="logo">
          {/* <p className="logo__text">b.blog</p> */}
        </div>
      </Link>
        <h1 className="auth__title">Welcome back!</h1>
        <p className="auth__text">Please enter your detalis</p>
      <form className="auth__form">
        <input className="auth__input" type="email" placeholder="Email" />
        <input className="auth__input" type="password" placeholder="Password" />
        <button className="auth__button">Log In</button>
        or
        <button className="auth__button">Log in with Google </button>
      </form>
      <p className="auth__text">
        {`Don't have an account? `}
        <Link to={"/auth/registration"}>Sing Up</Link>
      </p>
    </div>
  );
}

export default SignIn;
