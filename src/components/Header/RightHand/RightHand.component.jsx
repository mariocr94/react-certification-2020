import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Toggle from './Toggle';

const Container = styled.div`
    position: absolute;
    right: ${props => props.distance || "1em"};
    flex-direction: row;
    display: flex;
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