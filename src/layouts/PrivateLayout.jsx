import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateLayout = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <div className='flex justify-center items-center h-screen'><span className="loading loading-bars loading-xl"></span></div>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
};

export default PrivateLayout;