import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      
      <div className="register-bg">
        <h1>arijit</h1>
        <div className="register-container">
        <form>
         
            
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

            
          
          <button type="submit" className="signup">Log in</button>
         
         <div className="register-login">
         <Link to='/register'> <h1 >Not Registered Yet ? Register Now</h1> </Link>
         </div> 

        

        </form>
      </div>
      </div>
    </>
  );
};

export default LoginScreen;
