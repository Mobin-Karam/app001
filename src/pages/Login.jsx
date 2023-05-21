import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input required type="password" placeholder="password" />
        <input required type="text" placeholder="username" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Don't you have and account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
