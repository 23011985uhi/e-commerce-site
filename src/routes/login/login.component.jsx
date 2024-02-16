import {signInWithGooglePopup} from '../../utility/firebase/firebase.utils'



const Login = () => {
  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    console.log(response);
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