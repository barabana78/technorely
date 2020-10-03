import { FETCH_USERS, DELL_USERS } from './types'

const initialState = {
  fetchedUsers: [],
}

export const usersReducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, fetchedUsers: action.payload } //1возвращаем старый стейт2меняем старыйfetchedUsers на action.payload
    case DELL_USERS:
      return { ...state, fetchedUsers: action.payload }
    default:
      return state
  }
}
