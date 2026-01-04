import { GoogleAuthProvider, signInWithPopup ,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
  
    const signInWithGoogle =()=>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }

    const signUpWithEmailPassword =(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailPassword =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
             
                
                setUser(user);
                setLoading(false)
          
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
    const authInfo = {
        signInWithGoogle,
        signUpWithEmailPassword,
        signInWithEmailPassword,
        signOutUser,
        user,
        loading,
        setLoading
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;