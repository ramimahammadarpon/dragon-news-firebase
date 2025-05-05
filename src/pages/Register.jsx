import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {
    const {user, setUser, createUserEmail, updateUser} = useContext(AuthContext);
    const [nameErr, setNameErr] = useState('');
    const navigate = useNavigate();
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log("Yesss");
        console.log(e.target.fullName.value, e.target.photoUrl.value, e.target.email.value, e.target.password.value); 
        const fullName = e.target.fullName.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(fullName.length<6){
          setNameErr("Full Name should be minimum 6 Characters");
          return;
        }
        else{
          setNameErr("");
        }
        createUserEmail(email, password).then(() => {
            updateUser({displayName: fullName, photoURL: photoUrl}).then(()=>{
              setUser({...user, displayName:fullName, photoURL: photoUrl})
            }).catch((error)=>console.log(error));
            navigate('/');
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
          <input type="text" name='fullName' className="input" placeholder="Full Name" required />
          <p className='text-xs text-red-400'>{nameErr}</p>
          {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input type="text" name='photoUrl' className="input" placeholder="Photo URL" required />
          {/* Email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />
          {/* Password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
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