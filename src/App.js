import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

import { selectUser } from './features/user/userSlice'
import Login from './Login';
import { auth } from './firebase';

import {login, logout} from './features/user/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged( (authUser) => {
      console.log(authUser)
      if (authUser){
        // use is logged, 
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName,
        }))
      }else{
        // get the fuck out of my site
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    //BEM meaningful naming!
    <div className="app">   
    {user ? (
      <>      
      <Sidebar/>      
      <Chat/>
      </>
      ) : 
      (
      <>
        <Login/>
      </>
      )}   
      
    </div>
  );
}

export default App;
