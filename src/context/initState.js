import { theme } from './theme';


const initState = () => {

    return({
        search: '',
        currentTheme: theme.dark,
        user: {},
        isLogged: false
    });
};

export default initState();