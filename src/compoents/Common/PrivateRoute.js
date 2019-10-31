import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return <Route {...rest} render={(p) => {
        if (isLoggedIn) {
            return <Component {...p} />;
        } else {
            return <Redirect to='/login' />;
        }
    }} />;
};

const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.authReducer.isLoggedIn
    }
};

export default connect(mapStateToProps, null)(PrivateRoute);
