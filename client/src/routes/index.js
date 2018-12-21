import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Spin, message } from 'antd'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NoMatch from '../pages/NoMatch'
import Layout from '../components/Layout'

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

function withAuth(ComponentToAuth) {
  return class extends Component {
    state = {
      loading: true,
      redirect: false
    }

    componentDidMount() {
      fetch('/api/checkAuth').then(res => {
        if (res.status === 200) {
          this.setState({ loading: false })
        } else {
          this.setState({ loading: false, redirect: true })
          message.error('登陆已过期, 请重新登陆')
        }
      })
    }

    render() {
      const { loading, redirect } = this.state
      if (loading) {
        return (
          <Layout>
            <Spin size="large" />
          </Layout>
        )
      }

      if (redirect) {
        return <Redirect to="/login" />
      }

      return <ComponentToAuth {...this.props} />
    }
  }
}

export default Routes
