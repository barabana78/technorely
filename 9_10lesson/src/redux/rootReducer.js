import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { themeReducer } from './themeReducer'

export const rootReducer = combineReducers({
  users: usersReducer,
  theme: themeReducer,
})
