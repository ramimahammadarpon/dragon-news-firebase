import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userPic from "../assets/user.png";
import { AuthContext } from "../Provider/AuthContext";
const Navbar = () => {
  const {user, setUser,logout} = useContext(AuthContext);

  const handleLogout = () => {
    console.log("This is Logout");
    logout().then(()=>{
      alert("Logged Out Sucessfully");
    }).catch((error)=>{
      console.log(error);
    })
  }
  console.log(user);
  console.log(user);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user&&user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userPic} alt="" />
        {
          user? <button onClick={handleLogout} className="btn btn-primary px-10">Logout</button>: <Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
