import React, { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import style from '../Login/Login.module.css'

const FormItem = Form.Item

class RegisterForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then(res => {
          // register success
          if (res.status === 200) {
            this.props.onRegisterSuccess()
            message.success('Register succuss')
          } else {
            message.error('Email exists')
          }
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className={style['login-form']}>
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
          <Button type="primary" htmlType="submit" className={style['login-form-button']}>
            Register
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(RegisterForm)
