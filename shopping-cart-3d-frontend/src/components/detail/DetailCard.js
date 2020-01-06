import React, { Component } from 'react'
import { Card, Row, Col, Divider, Icon, Typography } from 'antd'
const { Text,Paragraph } = Typography;

export default class DetailCard extends Component {
  render() {
    const {description,file_formats} =this.props
    return (
      <Card style={{ width: '100%', boxShadow: '0px 0px 8px 0px rgba(204,204,204,1)' }}>
        <Row style={{ display: 'flex' }}>
          <Col span={8} >
            <Row style={{ padding: '10px 15px' }}>
              <Text strong style={{ fontSize: '20px' }}>DESCRIPTION</Text>
            </Row>
            <div style={{ borderBottom: '1px solid #000', margin: '0px 15px', padding: '1px' }} />
            <Row style={{ padding: '10px 15px' }}>
              <Paragraph style={{ fontSize: '16px' }}>{description}</Paragraph>
            </Row>
          </Col>
          <Col span={8}>
            <Row style={{ padding: '10px 15px' }}>
              <Text strong style={{ fontSize: '20px' }}>FORMATS & FILES</Text>
            </Row>
            <div style={{ borderBottom: '1px solid #000', margin: '0px 15px', padding: '1px' }} />
            <Row style={{ padding: '10px 15px' }}>
              <Col style={{padding:'0px 20px'}}>
                {file_formats.map(file => (
                  <>
                    <Icon style={{ fontSize: '20px' }} type="file" />
                    <Text strong style={{ fontSize: '20px' }}> {file.file_format}</Text>
                  </>
                  ))}
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row style={{ padding: '10px 15px' }}>
              <Text strong style={{ fontSize: '20px' }}>SPECIFICATIONS</Text>
            </Row>
            <div style={{ borderBottom: '1px solid #000', margin: '0px 15px', padding: '1px' }} />
          </Col>
        </Row>
      </Card>
    )
  }
}
