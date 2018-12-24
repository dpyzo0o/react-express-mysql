import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NoMatch from '../pages/NoMatch'
import withAuth from '../components/withAuth'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={withAuth(Home)} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
