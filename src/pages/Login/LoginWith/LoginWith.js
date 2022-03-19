import React from 'react';
import useAuth from '../../../hooks/useAuth';
import google from '../../../image/signingoogle.png'
import { useNavigate } from 'react-router-dom';

const LoginWith = ({redirect}) => {
    const {signInGooglePopup} = useAuth();
    const navigate = useNavigate();
    const googleSigninHandler = async () => {
       await signInGooglePopup();
       navigate(redirect)
    }
    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <img onClick={googleSigninHandler} src={google} alt="Signin with google" style={{height: '65px', maxWidth: '290px', cursor: 'pointer'}} />
            </div>
        </div>
    );
};

export default LoginWith;