import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../redux/actions'

export default ({ user, index, users }) => {
  const dispatch = useDispatch()

  return (
    <li className="animate__backInDown">
      <span>
        <strong>{index + 1}</strong>
        &nbsp;&nbsp;
        <img src={user.avatar_url} alt="avatar" />
        {user.login}
      </span>
      <button onClick={() => dispatch(removeUser(user.id))} type="button">
        x
      </button>
    </li>
  )
}
