import React, {useEffect, useState} from "react";
import "./Login.css";
import jwt_decode from "jwt-decode";

function Login() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("google-login").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("google-login").hidden = false;
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({client_id: "1071041387259-2kf53ndccj9q49i3iukrl235or4kbhgd.apps.googleusercontent.com", callback: handleCallbackResponse});

    google.accounts.id.renderButton(document.getElementById("google-login"), { theme: "outline", size: "large", width: 275});
}, [])

// If we have no user: sign in button
// If we have a user: show the log out button

  return (
    <div>
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
          <a href="/">Forget password?</a>
        </div>
        <input type="submit" value="Sign In" />
        <div className="new-user">
          <label>New User?</label>
          <a href="/">Sign Up</a>
        </div>
        <div className="border-line">OR</div>
    
        <div id="google-login"></div>
        { Object.keys(user).length !== 0 &&
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
        }
        { user &&
          <div>
            {/* Displays the user profile image and name*/}
            <img src={user.picture} alt=""></img>
            <h3>{user.name}</h3>
          </div>
        }
        {/* <button id="facebook"></button> */}
      </form>
    </div>
  );
}

export default Login;
