import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Spin, message } from 'antd'
import Layout from './Layout'

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
          message.error('未登录或登陆已过期')
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

export default withAuth
