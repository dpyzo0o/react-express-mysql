import React, { Component } from 'react'
import { Table } from 'antd'
import Layout from '../../components/Layout'

const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
    width: 300
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    align: 'center',
    width: 200
  },
  {
    title: 'Permission',
    dataIndex: 'permission',
    key: 'permission',
    align: 'center',
    width: 200
  }
]

class Home extends Component {
  state = {
    userList: []
  }

  componentDidMount() {
    fetch('/api/test')
      .then(res => res.json())
      .then(res => this.setState({ userList: res }))
  }

  render() {
    const { userList } = this.state
    return (
      <Layout>
        <div style={{ textAlign: 'center' }}>
          <h1>Home</h1>
          <Table
            pagination={{
              hideOnSinglePage: true,
              defaultPageSize: 50
            }}
            rowKey={record => record.id}
            columns={columns}
            dataSource={userList}
          />
        </div>
      </Layout>
    )
  }
}

export default Home
