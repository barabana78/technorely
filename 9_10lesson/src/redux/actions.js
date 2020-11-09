import { DELL_USERS, FETCH_USERS, THEME } from './types'

export function fetchUsers() {
  return async dispatch => {
    const response = await fetch('https://api.github.com/users')
    const getUsers = await response.json()
    dispatch({ type: FETCH_USERS, payload: getUsers })
  }
}

export function removeUser(id) {
  return { type: DELL_USERS, payload: id }
}

export function changeTheme(newTheme) {
  return { type: THEME, payload: newTheme }
}
