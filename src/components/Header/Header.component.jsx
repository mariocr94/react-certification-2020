import React from  'react';

import styled from 'styled-components';
import Menu from './Menu';
import SearchBar from './SearchBar'


const HeaderBox = styled.div`
display: flex;
padding: 0.3em;
width: 100%;
background-color: purple;
flex-direction: row;
float: ${props => props.float || "none"};
`;

const Header = () => {
   
    return (
        <HeaderBox> 
            <Menu />
            <SearchBar />
            {/*
            <Profile />
            <DarkMode />
            */}    
        </HeaderBox>
    );
};

export default Header;