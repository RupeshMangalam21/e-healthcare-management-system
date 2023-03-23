import React,{useContext}from 'react';
import { Route,Navigate } from 'react-router-dom';
import { AuthContext } from './auth/AuthProvider';

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {CurrentUser}=useContext(AuthContext);
    return (
        <Route
        {...rest}
        render={routeProps =>
          !!CurrentUser ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Navigate to={"/LogIn"} />
          )
        }
      />
    );
}      

export default PrivateRoute;
