import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import RegisterForm from './RegisterForm'
import Layout from '../../components/Layout'

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
        <div style={{ padding: '25px 25px 5px', boxShadow: '0px 0px 10px #ddd' }}>
          <RegisterForm onRegisterSuccess={this.handleRegisterSuccess} />
        </div>
      </Layout>
    )
  }
}

export default Register
