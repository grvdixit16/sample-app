import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { userLogout } from '../../actions/auth.action';

const Nav = (props) => {
    const handleLogout = () => {
        props.logout();
    };

    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            {props.isLoggedIn &&
                <ul>
                    <li>Welcome</li>
                    <li><Link onClick={handleLogout} to="">Logout</Link></li>
                    <li><Link to="/UserDetails">Manage User</Link></li>

                </ul>
            }
        </>
    )
}

const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.authReducer.isLoggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(userLogout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);