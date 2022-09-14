import React from 'react';
import  "./Style.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user , isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     <div className='form'>
     <span class="text-right"> 
     <span class="float-end">
     <span class="rounded float-end" alt="..."> <img  src={user.picture} class="rounded-circle"  width="30" height="30"   alt={user.name} />
      
       <p><span className='welcome'>Welcome </span>{user.name} !</p>
       </span>
       </span>
       </span>
      </div>
    )
  )
}
export default Profile