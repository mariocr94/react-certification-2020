import { theme } from './theme';

const initState = () => {
  return {
    search: '',
    currentTheme: theme.dark,
    user: {
      id: '',
      name: '',
      avatarUrl: '',
    },
    isLogged: false,
    favourites: [],
  };
};

export default initState();
