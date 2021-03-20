import React from 'react';

import styled from 'styled-components';

const Icon = styled.div `
    border-radius: 50%;
    height: 2em;
    width: 2em;
    margin-top: 10%;
    background-color: grey;
    cursor:pointer;
`;

const Head = styled.div`
    position:   relative;
    border-radius: 50%;
    width: 0.7em;
    height: 0.7em;
    margin: auto;
    top: 10%;
    background-color: white;
`;

const Body = styled.div`
    border-radius: 50%;
    width: 1.1em;
    height: 0.55em;
    margin: auto;
    margin-top: 20%;
    background-color: white;
`;

const Profile = () => {
    return (
        <>
            <Icon>
                <Head />
                <Body />
            </Icon>
        </>
    );
}

export default Profile;