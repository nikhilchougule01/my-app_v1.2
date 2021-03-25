export const setCurrentTheme = theme => ({
    type: 'SET_CURRENT_THEME',
    payload: theme
});

export const getCurrentTheme = () => ({
    type: 'GET_CURRENT_THEME'
});