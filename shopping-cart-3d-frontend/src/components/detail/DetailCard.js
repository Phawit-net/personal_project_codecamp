import React, { Component } from 'react'
import { Card, Row, Col, Icon, Typography } from 'antd'
const { Text, Paragraph } = Typography;

export default class DetailCard extends Component {

  descriptionRender(description) {
    return (
      <Col span={8} >
        <Row style={{ padding: '10px 15px' }}>
          <Text strong style={{ fontSize: '20px' }}>DESCRIPTION</Text>
        </Row>
        <div style={{ borderBottom: '1px solid #000', margin: '0px 15px', padding: '1px' }} />
        <Row style={{ padding: '15px 15px' }}>
          <Paragraph style={{ fontSize: '17px' }}>{description}</Paragraph>
        </Row>
      </Col>
    )
  }

  formatRender(file_formats) {
    return (
      <Col span={8}>
        <Row style={{ padding: '10px 15px' }}>
          <Text strong style={{ fontSize: '20px' }}>FORMATS & FILES</Text>
        </Row>
        <div style={{ borderBottom: '1px solid #000', margin: '0px 15px', padding: '1px' }} />
        <Row style={{ padding: '15px 15px' }}>
          {file_formats.map(file => (
            <>
              <Col span={6} style={{ padding: '0px 20px' }}>
                <Icon style={{ fontSize: '20px' }} type="file" />
                <Text strong style={{ fontSize: '20px' }}> {file.file_format}</Text>
              </Col>
            </>
          ))}
        </Row>
      </Col>
    )
  }

  switchIcon = (boolean) => {
    if (boolean == 1) {
      return (
        <Icon type="check-circle" theme="twoTone" twoToneColor="#62d25e"/>
      )
    } else {
      return (
        <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96"/>
      )
    }
  }

  specReturn(published_date, polygons_type, polygons_count, vertices_count, texture, material, rigged, animated, uv_mapped, unwrapped) {
    return (
      <Col span={8}>
        <Row style={{ padding: '10px 15px' }}>
          <Text strong style={{ fontSize: '20px' }}>SPECIFICATIONS</Text>
        </Row>
        <div style={{ borderBottom: '1px solid #000', margin: '0px 15px', padding: '1px' }} />
        <Row style={{ padding: '15px 15px' }}>
          <Col span={12} style={{ padding: '0px 20px'}}>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>Publish date</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>Geometry Type</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>Polygons</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>Vertices</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>Textures</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>Materials</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>Rigged</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>Animated</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>UV Mapped</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text strong style={{ fontSize: '20px' }}>Unwrapped UVs</Text>
            </Row>
          </Col>
          <Col span={12} style={{ padding: '0px 20px' }}>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{published_date}</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{polygons_type}</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{polygons_count}</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{vertices_count}</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{this.switchIcon(texture)}</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{this.switchIcon(material)}</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{this.switchIcon(rigged)}</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{this.switchIcon(animated)}</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{this.switchIcon(uv_mapped)}</Text>
            </Row>
            <Row style={{ padding: '5px 0px' }}>
              <Text style={{ fontSize: '20px' }}>{this.switchIcon(unwrapped)}</Text>
            </Row>
          </Col>
        </Row>
      </Col>
    )
  }

  render() {
    const { description, file_formats, published_date, polygons_type, polygons_count, vertices_count, texture, material, rigged, animated, uv_mapped, unwrapped } = this.props
    return (
      <Card style={{ width: '100%', boxShadow: '0px 0px 8px 0px rgba(204,204,204,1)' }}>
        <Row style={{ display: 'flex' }}>
          {this.descriptionRender(description)}
          {this.formatRender(file_formats)}
          {this.specReturn(published_date, polygons_type, polygons_count, vertices_count, texture, material, rigged, animated, uv_mapped, unwrapped)}
        </Row>
      </Card>
    )
  }
}
