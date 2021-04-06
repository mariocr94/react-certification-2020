import React, { useState, useRef, useContext } from  'react';
import AppContext from '../../AppContext';
import {useHistory} from 'react-router-dom';
import {SearchBox, Input} from '../styled';


const SearchBar = () => {
    const [search, setSearch] = useState("")
    const searchInput = useRef(null)
    const history = useHistory();

    const myContext = useContext(AppContext);

    const handleFocus = () => {
        searchInput.current.select()
    }

    const handleKeyDown = (evt) => {
        if(evt.key === 'Enter') {
            myContext.setSearch(evt.target.value);
            history.push(`/`);
        }
    }

    return (
        <SearchBox onClick={handleFocus} data-testid="Searchbox">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" 
            alt="" width="25" height="25" 
            style={{verticalAlign: 'middle', margin: 'auto 0'}} />
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

export default SearchBar;