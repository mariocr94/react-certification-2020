import React, { useState, useRef} from  'react';

import styled from 'styled-components';

const SearchBox = styled.div`
    background-color:grey;
    align-self: center;
    margin-left: 1em;
    margin-right: 1em;
    height: 2em;
    border: none;
    flex-direction: row;
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
    ::placeholder {
        color: white;
    }
`;


const SearchBar = (props) => {
    const [search, setSearch] = useState("")
    const searchInput = useRef(null)

    const handleFocus = () => {
        searchInput.current.focus()
    }
    
    const sendData = (evt) => {
        setSearch(evt.target.value);
        props.callBack(evt.target.value);
    }
    return (
        <>
            <SearchBox onClick={handleFocus}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" 
                alt="" width="25" height="25" 
                style={{verticalAlign: 'middle'}} />
                <Input 
                ref={searchInput}
                placeholder="Search..." 
                type="text" 
                value={search}
                onChange={sendData}
                onClick={(evt) => evt.target.select}/>
            </SearchBox>
        </>
    );
};

export default SearchBar;