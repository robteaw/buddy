import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      
      <form action="">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" required/>
        <p><input type="checkbox" />Remember Me <a href="">Forget password?</a></p>
        <input type="submit" value="Sign In" />
        <p>New User? <a href="">Sign Up</a></p>
        <p>OR</p>
        <p>Sign in with Google</p>
        <p>Sign in with Facebook</p>
      </form>
    </div>
  );
}

export default Login;
