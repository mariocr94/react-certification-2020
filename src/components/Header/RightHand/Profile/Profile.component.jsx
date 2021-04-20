import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import {Icon, Head, Body} from '../../styled';

const Profile = () => {
    const location = useLocation();

    return (
        <Link  to={{
            pathname: '/login',
            state: { background: location }
        }}>
            <Icon>
                <Head />
                <Body />
            </Icon>
        </Link>
    );
}

export default Profile;