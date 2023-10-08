import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviderContext = ({ children }) => {

    const [user, setUser] = useState(null)

    // create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth); 
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser, 
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviderContext;