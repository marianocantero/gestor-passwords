import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { MainScreen } from '../components/passwords/MainScreen';
import { AuthRouter } from './AuthRouter';

import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { startCargarSitios } from '../actions/sitios';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

function App() {

  const dispatch = useDispatch()
  const [cheking, setCheking] = useState(true);
  const [isLoggin, setIsLoggin] = useState(false);

  useEffect(() => {
      firebase.auth().onAuthStateChanged( async(user) => {
        if(user?.uid){
          dispatch(login(user.uid, user.displayName));
          setIsLoggin(true);
          
          dispatch(startCargarSitios(user.uid));
        
        } else {
          setIsLoggin(false)
        }

        setCheking(false);
      })
  }, [dispatch])

  if( cheking ) {
    return (
        <h1>Espere....</h1>
    )
    
  }

  return (
  
    <Router>
      <div>
        <Switch>
          <PublicRouter 
              path="/auth"
              component = { AuthRouter }
              isAuthenticated = { isLoggin }
              
          />
          
          <PrivateRouter
              exact
              isAuthenticated = { isLoggin } 
              path ="/"
              component = { MainScreen } 
          />

        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
