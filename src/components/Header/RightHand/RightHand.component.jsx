import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Toggle from './Toggle';

const Container = styled.div`
    position:absolute;
    align-self: center;
    display: flex;
    float: right;
    right: 0px;
    margin: 10px;
`;


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