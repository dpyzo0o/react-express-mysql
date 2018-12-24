import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'

const FormItem = Form.Item

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('/api/authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then(res => {
          // login success
          if (res.status === 200) {
            this.props.onLoginSuccess()
          } else {
            message.error('Incorrect email or password')
          }
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} style={{ width: '250px' }}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a style={{ float: 'right' }} href="/forgot">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Login in
          </Button>
          Or <a href="/register">register now!</a>
        </FormItem>{' '}
      </Form>
    )
  }
}

export default Form.create()(LoginForm)
