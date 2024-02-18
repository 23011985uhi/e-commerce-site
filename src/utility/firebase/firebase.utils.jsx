import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyArTrCEMCH12WJUq1HC4Cu6-gt-KhCZMOY",
  authDomain: "e-commercesite-4f133.firebaseapp.com",
  projectId: "e-commercesite-4f133",
  storageBucket: "e-commercesite-4f133.appspot.com",
  messagingSenderId: "329140506012",
  appId: "1:329140506012:web:eb5032052890b766420c59"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWIthGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
 // console.log(userDocRef);


  const userSnapshot = await getDoc(userDocRef);
  
  
  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt, ...additionalInfo
      });
    } catch (error){
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};