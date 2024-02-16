import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyArTrCEMCH12WJUq1HC4Cu6-gt-KhCZMOY",
  authDomain: "e-commercesite-4f133.firebaseapp.com",
  projectId: "e-commercesite-4f133",
  storageBucket: "e-commercesite-4f133.appspot.com",
  messagingSenderId: "329140506012",
  appId: "1:329140506012:web:eb5032052890b766420c59"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);