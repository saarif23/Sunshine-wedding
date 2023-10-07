import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);


    //sign up 
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //Sign In
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    //Sign In With Google
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider)
    }

    //Sign out
    const logout = () => {
        return signOut(auth);
    };

    //user observation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe;
        };
    }, []);

    //AuthContext Provider Value
    const authInfo = {
        user,
        signUp,
        signIn,
        logout,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthProvider;