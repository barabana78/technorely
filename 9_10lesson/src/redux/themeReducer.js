import { THEME } from './types'

const initialState = {
  setTheme: 'light',
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME:
      return { ...state, setTheme: action.payload }
    default:
      return state
  }
}
