import { reducer, initializer } from './AppReducer';
import initState from './initState';
import { theme } from './theme';

describe('AppReducer Component', () => {
  it('set search works properly', () => {
    const action = { type: 'SET_SEARCH', payload: 'hello' };
    const expectedState = { ...initState, search: 'hello' };
    expect(reducer(initState, action)).toStrictEqual(expectedState);
  });
  it('toggle theme works properly', () => {
    const action = { type: 'TOGGLE_THEME' };
    const expectedState = { ...initState, currentTheme: theme.light };
    expect(reducer(initState, action)).toStrictEqual(expectedState);
  });
  it('Login works properly', () => {
    const user = {
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    };
    const action = { type: 'LOGIN', payload: user };
    const expectedState = { ...initState, isLogged: true, user };
    expect(reducer(initState, action)).toStrictEqual(expectedState);
  });
  it('logout works properly', () => {
    const action = { type: 'LOGOUT' };
    const user = {
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    };
    const state = { ...initState, isLogged: true, user };
    const expectedState = { ...state, isLogged: false, user: {} };
    expect(reducer(state, action)).toStrictEqual(expectedState);
  });
  it('Add favourite works properly', () => {
    const action = { type: 'ADD_FAVOURITE', payload: 'example' };
    const expectedState = { ...initState, favourites: ['example'] };
    expect(reducer(initState, action)).toStrictEqual(expectedState);
  });
  it('remove favourite works properly', () => {
    const action = { type: 'REMOVE_FAVOURITE', payload: 'example' };
    const state = { ...initState, favourites: ['example'] };
    const expectedState = { ...initState };
    expect(reducer(state, action)).toStrictEqual(expectedState);
  });
});
