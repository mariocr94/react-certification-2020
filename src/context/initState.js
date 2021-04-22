import { theme } from './theme';


const initState = () => {

    return({
        search: '',
        currentTheme: theme.dark,
        user: {},
        isLogged: false,
        favourites: []
    });
};

export default initState();