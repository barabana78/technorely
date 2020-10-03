import React from 'react'
import FetchedUsers from './Components/UsersListFetched'
import { fetchUsers } from './redux/actions'
import { useDispatch } from 'react-redux'

function ReduxApp() {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>User list from REDAX</h1>
      <button className="addUser redux" onClick={() => dispatch(fetchUsers())}>
        Add users
      </button>
      <FetchedUsers />
    </div>
  )
}
export default ReduxApp
