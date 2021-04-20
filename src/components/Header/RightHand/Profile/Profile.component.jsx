import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import {Icon, Head, Body} from '../../styled';
import { useAppContext } from '../../../../context/AppProvider';

const Profile = () => {
    const { state } = useAppContext();
    const { isLogged, user } = state;
    const location = useLocation();

    return (
        <>  
            {isLogged ? 
                
                    <Icon > 
                        <img src={user.avatarUrl} alt="avatar IMG" height="100%" width="100%"/>
                    </Icon>
                : 
                <Link  to={{
                    pathname: '/login',
                    state: { background: location }
                }}>
                    <Icon>
                        <Head />
                        <Body />
                    </Icon>
                </Link>
            }
            
        </>
    );
}

export default Profile;