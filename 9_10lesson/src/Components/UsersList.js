import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import getUser from '../redux/selectors/userSelector'

const UsersList = () => {
//   const users = useSelector(state => state.users.fetchedUsers)
const users = useSelector(state => getUser(state))
  return (
    <div>
      {users.length ? (
        <ul>
          {users.map((user, i, users) => (
            <User user={user} index={i} key={user.id} users={users} />
          ))}
          <li></li>
        </ul>
      ) : (
        <p>No users</p>
      )}
    </div>
  )
}

export default UsersList
