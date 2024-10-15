import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user, loading } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props =>
                loading ? (
                    <div>Loading...</div>
                ) : user ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
