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
          <Route exact path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
