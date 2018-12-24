import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import Layout from '../../components/Layout'
import style from './Login.module.css'

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
        <div className={style['login-form-wrapper']}>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </div>
      </Layout>
    )
  }
}

export default Login
