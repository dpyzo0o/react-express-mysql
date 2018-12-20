import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import style from './LoginForm.module.css'

const FormItem = Form.Item

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.history.push('/home')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className={style['login-form']}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名！' }]
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>记住我</Checkbox>)}
          <a className={style['login-form-forgot']} href="/forgot">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className={style['login-form-button']}>
            登陆
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default withRouter(Form.create()(LoginForm))
