import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import Layout from '../../components/Layout'

class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  handleLoginSuccess = () => this.setState({ redirectToReferrer: true })

  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) return <Redirect to="/" />

    return (
      <Layout>
        <div style={{ padding: '25px 25px 5px', boxShadow: '0px 0px 10px #ddd' }}>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </div>
      </Layout>
    )
  }
}

export default Login
