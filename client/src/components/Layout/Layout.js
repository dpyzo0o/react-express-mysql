import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Layout.module.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props
    return <div className={style.root}>{children}</div>
  }
}

export default Layout
