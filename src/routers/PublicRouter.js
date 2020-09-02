import React from 'react'
import {Route, Redirect} from 'react-router-dom';

export const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
       <Route { ...rest }
            component={ (props) =>(
                ( isAuthenticated )
                ? ( <Redirect to ="/" /> )
                : ( <Component {...props} /> )
            )}

        />
        
    )
}
