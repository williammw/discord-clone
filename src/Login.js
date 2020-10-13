import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import {auth, provider} from './firebase'

export default function Login() {

  const SignIn = (e) => {
    e.preventDefault();
    //do login
    auth.signInWithPopup(provider)
    .catch(err => alert(err))
  }

  return (
    <div className="login">
      <h1>i am logoin page,</h1>
      <div className="login__logo">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png" alt=""/>
      </div>
      <Button onClick={SignIn}>Sign In</Button>
    </div>
  )
}
