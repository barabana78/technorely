import { DELL_USERS, FETCH_USERS, THEME } from './types'

export function fetchUsers() {
  return async dispatch => {
    const response = await fetch('https://api.github.com/users')
    const gitUsers = await response.json()
    dispatch({ type: FETCH_USERS, payload: gitUsers }) //функция которая меняет состояние store
  }
}

export function removeUser(users, id) {
  return dispatch => {
    const dellUser = users.filter(item => item.id !== id)
    dispatch({ type: DELL_USERS, payload: dellUser })
  }
}

export function changeTheme(newTheme) {
  return dispatch => {
    dispatch({ type: THEME, payload: newTheme })
  }
}
