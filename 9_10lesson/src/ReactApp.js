import React from 'react'
import UsersList from './Components/UsersList'
import ContextDel from './context'

function ReactApp() {
  //users - this is curent state on default empty array, setUsers-is function to change state
  const [users, setUsers] = React.useState([])

  function handleClick() {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(users => setUsers(users))
  }

  function removeUser(id) {
    setUsers(users.filter(item => item.id !== id))
  }

  return (
    <ContextDel.Provider value={{ removeUser: removeUser }}>
      <div>
        <h1>User list from React</h1>
        <button className="addUser" onClick={handleClick}>
          Add users
        </button>
        {users.length ? <UsersList users={users} /> : <p>No users</p>}
      </div>
    </ContextDel.Provider>
  )
}
export default ReactApp
