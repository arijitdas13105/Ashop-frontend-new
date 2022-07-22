import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <div className="register-bg">
        <div className="register-container">
          <form>
            <label for="name">
              <b>Name</b>
            </label>
            <input type="text" placeholder="Enter Name" name="name" required />

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label for="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />

            <label for="cpassword">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              required
            />

            <button type="submit" className="signup">
              Sign Up
            </button>
            <div className="register-login">
            <Link to="/login">
              
              <h1 >
                alredy have an account ? Log in
              </h1>
            </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
