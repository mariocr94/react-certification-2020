import React, { useState } from  'react';

import styled from 'styled-components';

const SearchBox = styled.div`
    background-color:grey;
    align-self: center;
    margin-left: 1em;
    height: 2em;
    border: none;
    border-radius: 0.5em;
`;

const Input = styled.input `
    border: none;
    margin-top: 0.5em;
    background-color: grey;
    font-size: 0.9em;
    color: white;
    outline: none;
    .focus{
        color: white;
    }
`;


const SearchBar = () => {
    const [search, setSearch] = useState("Wizeline")

    return (
        <>
            <SearchBox> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" 
                alt="" width="25" height="25" 
                style={{verticalAlign: 'middle'}} />
                <Input 
                placeholder="Search..." 
                type="text" 
                value={search}
                onChange={(evt) => setSearch(evt.target.value)}
                onClick={(evt) => evt.target.select}/>
            </SearchBox>
        </>
    );
};

export default SearchBar;