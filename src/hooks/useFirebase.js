import { useState, useEffect } from 'react';
import initializeAuthentication from './../Components/Firebase/firebase.init';
import { createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut , getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [validated, setValidated] = useState(false); 
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

   
       const handleSignInEmail=(email,password,location, history)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {       
          const user = result.user;
          const destination = location?.state?.from || '/';
                history.replace(destination);
          console.log("user",user);
         
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
        .finally(() => setLoading(false));
       }
     
       const handleCreateEmail=(email,name,password)=>{
         setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
           
          // save user to the database
          saveUser(email, name,'POST');
          setEmail('');
          setPassword('');
          verifyEmail();
          setUserName(name);

          
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
        .finally(() => setLoading(false));
       }
      
     
    
    
    const handlePasswordReset = (email) => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log('email sent')
        })
    }
    
    const setUserName = (name) =>{
      updateProfile(auth.currentUser, {
        displayName: name
      })
      .then(() =>{
        console.log('updating name');
      })
      .catch(error =>{
        setError(error.message);
      })
    }
    const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log('Email Verification Sent');
        })
    }
//................................... GOOGLE ......................................................

    const signInUsingGoogle = () => {
         signInWithPopup(auth, googleProvider)
         .then((result)=>{
          const user=result.user;
          // save user to the database
          saveUser(email, name,'PUT');

         })

        .finally(() => { setLoading(false) });
    }
//................................... LOGOUT ......................................................
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }
//save user

  const saveUser=(email,displayName,method)=>{
    const user={email,displayName};
    fetch(' https://shrouded-island-20625.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

  }
    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loading,
       
        validated,
        error,
        name,
        email,
        password,
        signInUsingGoogle,
        logOut,
        handleSignInEmail,
        handleCreateEmail,
       handlePasswordReset,
        setUserName,
        verifyEmail 
    }
}

export default useFirebase;