import{ theme } from "./theme";
import initState from "./initState";

export const initializer = () => {
    const user = JSON.parse(localStorage.getItem("reactUserInfo"));
    const isLogged = JSON.parse(localStorage.getItem("reactIsLogged"))
    console.log({
        ...initState,
        user: user,
        isLogged: isLogged
    });
    return {
        ...initState,
        user: user,
        isLogged: isLogged
    };    
}

export function reducer(state, action){ 
    switch (action.type) {
        case "SET_SEARCH": {
            return { 
                ...state, 
                search: action.payload
            }
        }
        case "TOGGLE_THEME": {
            const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
            return { 
                ...state,
                currentTheme: theme[newThemeKey] 
            };
        }
        case "LOGIN": {
            return { 
                ...state, 
                user: action.payload,
                isLogged: true
            };
        }
        case "LOGOUT": {
            return {   
                ...state, 
                user: {},
                isLogged: false
            };
        }
        default: 
            throw new Error("Unknown Action");
    }
}