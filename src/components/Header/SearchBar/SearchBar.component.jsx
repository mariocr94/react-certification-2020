import React from  'react';

import styled from 'styled-components';

const SearchBox = styled.div`
    background-color:#fcacc6;
    align-self: center;
    margin-left: 1em;
    height: 2em;
    border: none;
    border-radius: 0.5em;
`;

const Input = styled.input `
    border: none;
    margin-top: 0.5em;
    background-color: #fcacc6;
`;


const SearchBar = () => {
    return (
        <>
            <SearchBox> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" alt="" width="25" height="25" style={{verticalAlign: 'middle'}}></img>
                <Input placeholder="Search..." type="text" value="Wizeline"/>
            </SearchBox>
        </>
    );
};

export default SearchBar;