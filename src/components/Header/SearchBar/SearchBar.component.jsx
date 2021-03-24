import React, { useState, useRef} from  'react';

import {SearchBox, Input} from '../styled';


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