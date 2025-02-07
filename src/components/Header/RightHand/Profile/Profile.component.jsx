import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Icon, Head, Body } from '../../styled';
import { AppContext } from '../../../../context/AppProvider';

const Profile = () => {
  const { state } = useContext(AppContext);
  const { isLogged, user } = state;
  const location = useLocation();

  return (
    <>
      {isLogged ? (
        <Link
          to={{
            pathname: '/logout',
            state: { background: location },
          }}
        >
          <Icon data-testid="LoggedProfile">
            <img src={user.avatarUrl} alt="avatar IMG" height="100%" width="100%" />
          </Icon>
        </Link>
      ) : (
        <Link
          to={{
            pathname: '/login',
            state: { background: location },
          }}
        >
          <Icon data-testid="Profile">
            <Head />
            <Body />
          </Icon>
        </Link>
      )}
    </>
  );
};

export default Profile;
