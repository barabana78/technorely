import { FETCH_USERS, DELL_USERS } from './types'

const initialState = {
  fetchedUsers: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, fetchedUsers: action.payload }
    case DELL_USERS:
      return {
        ...state,
        fetchedUsers: state.fetchedUsers.filter(item => item.id !== action.payload),
      }
    default:
      return state
  }
}
