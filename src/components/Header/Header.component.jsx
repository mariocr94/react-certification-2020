import React from  'react';

import styled from 'styled-components';
import Menu from './Menu';
import SearchBar from './SearchBar';
import RightHand from './RightHand';


const HeaderBox = styled.div`
    position: sticky;
    display: flex;
    width: 100%;
    background-color: purple;
    flex-direction: row;
`;

const Header = (props) => {

    const updateSearch = (childData) => {
        props.callBack(childData);
    }


    return (
        <HeaderBox> 
            <Menu />
            <SearchBar callBack = {updateSearch}/>
            <RightHand />
        </HeaderBox>
    );
};

export default Header;