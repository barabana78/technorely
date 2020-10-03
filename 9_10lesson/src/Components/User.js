import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContextDel from '../context'

function MyUser({ user, index }) {
  const { removeUser } = useContext(ContextDel)
  return (
    <li className="wow animate__backInUp">
      <span>
        <strong>{index + 1}</strong>
        &nbsp;&nbsp;
        <img src={user.avatar_url} alt="avatar" />
        {user.login}
      </span>
      <button type="button" onClick={() => removeUser(user.id)}>
        x
      </button>
    </li>
  )
}

MyUser.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number,
}

export default MyUser
