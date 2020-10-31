import React from 'react'
import { fetchUsers } from './redux/actions'
import { useDispatch } from 'react-redux'
import UsersListRedux from './Components/UsersListRedux'

function ReduxApp() {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>User list from REDAX</h1>
      <button className="addUser redux" onClick={() => dispatch(fetchUsers())}>
        Add users
      </button>
      <UsersListRedux />
    </div>
  )
}
export default ReduxApp
