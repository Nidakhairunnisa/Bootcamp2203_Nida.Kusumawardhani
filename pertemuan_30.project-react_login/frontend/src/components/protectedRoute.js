import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import {withAuth} from '../context/AuthContext';

function ProtectedRoute (props) {
    const {component: Component, ...rest } = props

    return(
        props.isLoggedIn ? <Route {...rest} component={Component}/>
                        : <Navigate push to='/'/>
    )
}

export default withAuth(ProtectedRoute)