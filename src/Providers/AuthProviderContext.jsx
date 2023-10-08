import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null); 

const auth = getAuth(app);  

const AuthProviderContext = ({children}) => {

    const [user, setUser] = useState(null)

    // create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password )
    }


    const authInfo = {
        user, 
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviderContext;