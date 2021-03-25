import React, { useState, useRef} from  'react';

import {SearchBox, Input} from '../styled';
import PropTypes from 'prop-types';


const SearchBar = ({callBack}) => {
    const [search, setSearch] = useState("")
    const searchInput = useRef(null)

    const handleFocus = () => {
        searchInput.current.select()
    }

    const handleKeyDown = (evt) => {
        if(evt.key === 'Enter') {
            sendData(evt);
        }
    }

    const sendData = (evt) => {
        callBack(evt.target.value);
    }

    return (
        <SearchBox onClick={handleFocus} data-testid="Searchbox">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" 
            alt="" width="25" height="25" 
            style={{verticalAlign: 'middle'}} />
            <Input 
            ref={searchInput}
            placeholder="Search..." 
            type="text" 
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
            onKeyDown={handleKeyDown}/>
        </SearchBox>
    );
};

SearchBar.propTypes = {
    callBack: PropTypes.func
}

export default SearchBar;