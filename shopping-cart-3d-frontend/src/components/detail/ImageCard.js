import React, { Component } from 'react'
import { Card } from 'antd'

export default class ImageCard extends Component {
  render() {
    const { image, productName } = this.props
    return (
      <Card style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image} alt={productName} style={{ width: '600px', height: '600px' }} />
        </div>
      </Card>
    )
  }
}
