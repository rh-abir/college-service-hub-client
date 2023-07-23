import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";




export const AuthContext = createContext(null);

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] =  useState(true);


    const signUp = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogin = () => {
        setLoading(false)
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = () => {
        return signOut(auth)
    }


    useEffect( () => {
        const unscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })

        return () => {
            unscribe()
        }

    }, [])

    const authInfo = {

        user,
        signUp,
        singIn,
        googleLogin,
        gitHubLogin,
        logOut,
        loading,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;