import { theme } from './theme';


const initState = () => {

    return({
        search: '',
        currentTheme: theme.dark,
        user: {},
        isLogged: false,
        favourites: ['sOS9aOIXPEk']
    });
};

export default initState();