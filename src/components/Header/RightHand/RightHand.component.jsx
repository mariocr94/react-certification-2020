import React from 'react';
import {Container} from '../styled';
import Profile from './Profile';
import Toggle from './Toggle';



const Header = () => {
    return (
        <>
            <Container>
                <div>
                    <Toggle />
                </div>
                <div>
                    <Profile />
                </div>
            </Container>
        </>
    );
}


export default Header;