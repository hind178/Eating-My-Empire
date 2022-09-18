import React from 'react';
import './Style.scss';
import { useAuth0 } from '@auth0/auth0-react';
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  isAuthenticated && console.log(user);
  return (
    isAuthenticated && (
      <div>
        <p>
          <span className="welcome">Welcome </span>
          {user.name} !
        </p>
        {/* </span>
       </span>
       </span> */}
      </div>
    )
  );
};
export default Profile;