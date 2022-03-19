import React from 'react';
import Form from './Form/Form';
import LoginWith from './LoginWith/LoginWith';
import { useLocation } from 'react-router-dom';
const Login = () => {
    const location = useLocation();
    const redirect = location.state ? location.state.from.pathname : '/';
    return (
        <>
        <Form redirect={redirect}/>
        <LoginWith redirect={redirect}/>
        </>
    );
};

export default Login;