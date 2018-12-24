import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import RegisterForm from './RegisterForm'
import Layout from '../../components/Layout'
import style from '../Login/Login.module.css'

class Register extends Component {
  state = {
    redirectToReferrer: false
  }

  handleRegisterSuccess = () => this.setState({ redirectToReferrer: true })

  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) return <Redirect to="/login" />

    return (
      <Layout>
        <div className={style['login-form-wrapper']}>
          <RegisterForm onRegisterSuccess={this.handleRegisterSuccess} />
        </div>
      </Layout>
    )
  }
}

export default Register
