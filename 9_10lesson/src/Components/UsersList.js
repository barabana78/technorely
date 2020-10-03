import React from 'react'
import PropTypes from 'prop-types'
import MyUser from './User'

function UsersList(props) {
  return (
    <ul>
      {props.users.map((user, index) => {
        return <MyUser user={user} key={user.id} index={index} />
      })}
      <li></li>
    </ul>
  )
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UsersList
