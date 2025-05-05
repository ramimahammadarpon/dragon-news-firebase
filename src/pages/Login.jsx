import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  const {login} = useContext(AuthContext);
  const [err, setError] = useState('');
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogIn = e => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.preventDefault();
    login(email, password).then(result=>{
      navigate(`${location.state? location.state : "/"}`);
      console.log(result);
    }).catch(error =>{
      setError(error.message);
    })
  }

  return (
    <div className="hero bg-base-200 min-h-[75vh]">
      <div className="hero-content w-full">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-2xl text-center">
              Login Your Account
            </h2>
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              {err&& <p className='text-red-400 text-sm mt-1'>{err}</p>}
              <p className="font-semibold text-center">
                Don't Have an Account?{" "}
                <Link className="text-secondary" to="/auth/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
