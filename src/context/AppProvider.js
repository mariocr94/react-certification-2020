import React, { createContext, useContext, useReducer } from 'react';

import reducer from './AppReducer.js';

const initState = {
    search: ''
};

const AppContext = createContext({
    search: ''
});

function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error(`Can't use "useAppContext" without a Provider!`);
    }
    return context;
}

function AppProvider({ children}){
    const [state, dispatch] = useReducer(reducer, initState);
    
    return(
        <AppContext.Provider value ={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}

export { useAppContext };

export default AppProvider;