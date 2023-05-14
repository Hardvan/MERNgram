import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="auth-left">
        {/* Website Logo */}
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>MERNgram</h1>
          <h6>Connecting Reacts and Posting the Node-able!</h6>
        </div>
      </div>

      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
};

// Sign Up Form Component
function SignUp() {
  return (
    <div className="auth-right">
      <form className="infoForm authForm">
        {/* Sign Up Header */}
        <h3>Sign Up</h3>

        {/* First Name and Last Name Input */}
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="infoInput"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="infoInput"
          />
        </div>

        {/* Username Input */}
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="infoInput"
          />
        </div>

        {/* Password and Confirm Password Input */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
          <input
            type="password"
            name="confirmpass"
            placeholder="Confirm Password"
            className="infoInput"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account? Login!
          </span>
        </div>

        {/* Sign Up Button */}
        <button className="btn infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

function LogIn() {
  return (
    <div className="auth-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        {/* Username Input */}
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="infoInput"
          />
        </div>

        {/* Password Input */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>

          {/* Login Button */}
          <button className="btn infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
