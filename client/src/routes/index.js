import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NoMatch from '../pages/NoMatch'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <AuthRoute exact path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        const user = localStorage.getItem('userName')
        const pass = localStorage.getItem('password')
        if (user === 'dpyzo0o' && pass === 'robert940121') {
          localStorage.clear()
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      }}
    />
  )
}

export default Routes
