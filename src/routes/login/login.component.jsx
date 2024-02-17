import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utility/firebase/firebase.utils'



const Login = () => {
  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick = {logGoogleUser}>
        Sign in with Google Popup
      </button>
    </div>
  )
}

export default Login