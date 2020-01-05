import React, { Component } from 'react'
import { Card, Row, Button, Icon, Typography } from 'antd'
const { Text } = Typography;

export default class FullPath extends Component {
  render() {
    const {catPath , subPath , productName} = this.props
    return (
      <Text style={{ fontSize: '20px', color: '#595959' }}>
        <a href='#' style={{ color: '#b6b6b6' }}>3D Model / </a>
        <a href='#' style={{ color: '#b6b6b6' }}> {catPath} / </a>
        <a href='#' style={{ color: '#b6b6b6' }}> {subPath} / </a>
        <Text strong>{productName}</Text>
      </Text>
    )
  }
}
