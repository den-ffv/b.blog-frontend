import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./signin";
import SignUp from "./signup";

import "./styles/auth.scss";
import image from "/art.webp";

function Auth() {
  return (
    <div className="auth">
      <img className="auth-image" src={image} alt="image" />
      <div className="auth__conteiner">
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/registration" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default Auth;
