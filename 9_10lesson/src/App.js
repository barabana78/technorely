import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UsersList from './Components/UsersList'
import { changeTheme, fetchUsers } from './redux/actions'
import Footer from './Footer'
import getTheme from './redux/selectors/themeSelector'

function App() {
  const dispatch = useDispatch()
  const theme = useSelector(state => getTheme(state))
  document.body.className = theme
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
  
  return (
    <div className="wrapper">
      <h1>User list from REDAX</h1>
      <button className="changeTheme" onClick={() => dispatch(changeTheme(newTheme))}>
        Change theme
      </button>
      <button className="addUser redux" onClick={() => dispatch(fetchUsers())}>
        Add users
      </button>
      <UsersList />
      <Footer />
    </div>
  )
}

export default App
