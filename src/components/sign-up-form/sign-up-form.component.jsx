import {useState} from 'react';
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sign-up-form.styles.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utility/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;
  //console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password != confirmPassword) {
      alert("Passwords do not match")
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();

    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      } else{
      console.log('There was an issue creating user', error);
      }
    } 
  }

  const handleChange =(event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        label ='Display Name' input type= "text" required onChange = {handleChange} name='displayName' value={displayName} 
        />
        <FormInput
        label ='Email' input type = "email" required onChange = {handleChange} name='email' value={email} 
        />
        <FormInput
        label ='Password' input type= "password" required onChange = {handleChange} name='password' value={password} 
        />
        <FormInput
        label ='Confirm Password' input type= "password" required onChange = {handleChange} name='confirmPassword' value={confirmPassword} 
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;