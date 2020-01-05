import React, { Component } from 'react'
import { Card, Row, Button, Icon, Typography } from 'antd'
const { Text } = Typography;

export default class ImageCard extends Component {
  render() {
    const { image } = this.props
    return (
      <Card style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image} style={{ width: '600px', height: '600px' }} />
        </div>
      </Card>
    )
  }
}
