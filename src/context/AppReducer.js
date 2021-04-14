import{ theme } from "./theme";

export default function reducer(state, action){ 
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
        default: 
            throw new Error("Unknown Action");
    }
}