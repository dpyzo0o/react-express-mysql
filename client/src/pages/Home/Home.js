import React, { Component } from 'react'
import { Table } from 'antd'
import Layout from '../../components/Layout'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: 200
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
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
              defaultPageSize: 5
            }}
            rowKey={record => record.name}
            columns={columns}
            dataSource={userList}
          />
        </div>
      </Layout>
    )
  }
}

export default Home
