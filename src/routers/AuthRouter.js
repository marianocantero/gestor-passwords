import React from 'react'
import {
    Switch,
    Route,
  } from 'react-router-dom';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { LoginScreen } from '../components/auth/LoginScreen';


export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/auth/register"
                    component = { RegisterScreen } 
                />
                <Route 
                    exact
                    path="/auth/login"
                    component = { LoginScreen }
                />
                    
            </Switch>
        </div>
    )
}
