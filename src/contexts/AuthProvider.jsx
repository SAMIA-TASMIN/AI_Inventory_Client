import { GoogleAuthProvider, signInWithPopup ,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const signInWithGoogle =()=>{

       return signInWithPopup(auth,googleProvider)
    }

    const signUpWithEmailPassword =(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailPassword =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        signInWithGoogle,
        signUpWithEmailPassword,
        signInWithEmailAndPassword,
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;