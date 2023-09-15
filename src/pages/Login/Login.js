import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <script src="https://accounts.google.com/gsi/client" async defer></script>

      <h1>Login</h1>

      <form action="">
        <label>Email</label>
        <input type="email" name="email" id="email" required />
        <label>Password</label>
        <input type="text" name="password" id="password" required />
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>{" "}
          <a href="">Forget password?</a>
        </div>
        <input type="submit" value="Sign In" />
        <div className="new-user">
          <label>New User?</label>
          <a href="/">Sign Up</a>
        </div>
        <div className="border-line">OR</div>
        <button className="google">Sign in with Google</button>
        <button className="facebook">Sign in with Facebook</button>
      </form>
    </div>
  );
}

export default Login;
