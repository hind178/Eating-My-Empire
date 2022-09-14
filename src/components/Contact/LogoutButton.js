import React from 'react';
import  "./Style.scss";
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout , isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className='logout' onClick={() => logout()}>
        Log Out
      </button>
    )
  )
}

export default LogoutButton