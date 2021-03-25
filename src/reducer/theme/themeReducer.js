export const initialState = {
    currentTheme:''
}

export default function themeReducer(state = initialState, action) {
    if (state===undefined) {
        return { currentTheme:'' }
    }

    switch (action.type) {
        case 'SET_CURRENT_THEME':
            localStorage.setItem('theme', action.payload);
            return { ...state, currentTheme: action.payload }
        case 'GET_CURRENT_THEME':
            const myTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : '';
            return { ...state, currentTheme: myTheme }
        default:
            return { ...state }
    }
}