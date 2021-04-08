export default function reducer(state, action){ 
    switch (action.type) {
        case "SET_SEARCH": {
            return { 
                ...state, 
                search: action.payload
            }
        }
        default: 
        throw new Error("Unknown Action");
    }
}