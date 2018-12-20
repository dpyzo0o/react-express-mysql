import React, { Component } from 'react'
import LoginForm from './LoginForm'
import Layout from '../../components/Layout'

class Login extends Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            padding: '25px 25px 5px',
            boxShadow: '0px 0px 10px #ddd'
          }}
        >
          <LoginForm />
        </div>
      </Layout>
    )
  }
}

export default Login
