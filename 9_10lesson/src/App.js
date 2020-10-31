import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Footer from './Footer'

import ReduxApp from './AppRedux'
import ReactApp from './AppReact'

import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from './redux/actions'

function App() {
  const theme = useSelector(state => state.theme.setTheme) //useSelector - маппинг значения из store.
  document.body.className = theme
  const dispatch = useDispatch()

  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
  return (
    <Router>
      <div className="wrapper">
        <div className="flex">
          <nav>
            <NavLink to="/">React</NavLink>
            <NavLink to="/ReduxApp">Redux</NavLink>
          </nav>
          <button onClick={() => dispatch(changeTheme(newTheme))}>Change theme</button>
        </div>

        <Switch>
          <Route exact path="/" component={ReactApp} />
          <Route exact path="/ReduxApp" component={ReduxApp} />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}
export default App
