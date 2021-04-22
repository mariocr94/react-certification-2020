import React, { createContext, useContext, useReducer } from 'react';
import { useEffect } from 'react';
import { reducer, initializer } from './AppReducer.js';

const AppContext = createContext({
    search: '',
    currentTheme: {},
    favourites: [],
    user: {},
    isLogged: false,
});

function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error(`Can't use "useAppContext" without a Provider!`);
    }
    return context;
}

function AppProvider({ children}){
    const [state, dispatch] = useReducer(reducer, {}, initializer);

    useEffect(() => {
        localStorage.setItem("reactUserInfo", JSON.stringify(state.user));
        localStorage.setItem("reactIsLogged", JSON.stringify(state.isLogged));
    }, [state.user, state.isLogged])

    useEffect(() => {
        localStorage.setItem("reactFavourites", JSON.stringify(state.favourites));
    }, [state.favourites])

    return(
        <AppContext.Provider value ={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}

export { useAppContext };

export default AppProvider;