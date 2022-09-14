import React from 'react';
import  "./Style.scss";
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect , isAuthenticated } = useAuth0();
 function login ()
 {
loginWithRedirect();
 }
  return (
    !isAuthenticated && (
      <button className='login' onClick={login}>
        Log In
      </button>
    )
  )
}

export default LoginButton