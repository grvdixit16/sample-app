import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/auth.action';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        props.login(username, password);
    };

    if (props.isLoggedIn) {
        props.history.push('/');
    }

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={handleChange} />
            </div>
            <div>
                <label>Username</label>
                <input type="text" name="password" value={password} onChange={handleChange} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.authReducer.isLoggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(userLogin(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);