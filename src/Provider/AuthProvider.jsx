import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import { auth } from '../firebase.init';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUserEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (proDetails) => {
        return updateProfile(auth.currentUser, proDetails);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            return()=> unsubscribe();
        })
    }, [])

    const authData = {
        user, 
        setUser,
        createUserEmail,
        logout,
        login,
        loading,
        updateUser
    }
    return (
       <AuthContext value={authData}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;