import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Footer'

import ReduxApp from './ReduxApp'
import ReactApp from './ReactApp'

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
            <a href="/">React</a>
            <a href="/ReduxApp">Redux</a>
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
