import React from 'react'
import { useSelector } from 'react-redux'
import UserFetched from './UserFetched'

export default () => {
  const users = useSelector(state => state.users.fetchedUsers) //useSelector - маппинг значения из store.

  return (
    <div>
      {users.length ? (
        <ul>
          {users.map((user, i, users) => (
            <UserFetched user={user} index={i} key={user.id} users={users} />
          ))}
          <li></li>
        </ul>
      ) : (
        <p>No users</p>
      )}
    </div>
  )
}
