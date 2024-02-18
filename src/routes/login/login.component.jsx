import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth';

import {signInWithGooglePopup, createUserDocumentFromAuth,} from '../../utility/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'


const Login = () => {
  
  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick = {logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  )
}

export default Login