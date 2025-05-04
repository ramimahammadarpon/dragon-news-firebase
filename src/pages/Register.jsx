import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {
    const {user, setUser, createUserEmail} = useContext(AuthContext);
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log("Yesss");
        console.log(e.target.fullName.value, e.target.photoUrl.value, e.target.email.value, e.target.password.value); 
        const fullName = e.target.fullName.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserEmail(email, password).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="hero bg-base-200 min-h-[75vh]">
  <div className="hero-content w-full">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h2 className='font-bold text-2xl text-center'>Register Your Account</h2>
        <form onSubmit={handleFormSubmit} className="fieldset">
            {/* Full Name */}
          <label className="label">Full Name</label>
          <input type="text" name='fullName' className="input" placeholder="Full Name" />
          {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input type="text" name='photoUrl' className="input" placeholder="Photo URL" />
          {/* Email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* Password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center'>Already Have an Account? <Link className='text-secondary' to="/auth/login">Login</Link></p>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;