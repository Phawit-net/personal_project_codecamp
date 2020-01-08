import React, { Component } from 'react'
import { Card, Row, Col, Button, Icon, Typography } from 'antd'
const { Text } = Typography;

export default class PriceCard extends Component {

  switchButton = (price, handleClick) => {
    if (price != 0) {
      return (
        <Button type='primary' onClick={handleClick} style={{ backgroundColor: '#429be8', padding: '10px', width: '200px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Icon type="shopping-cart" style={{ fontSize: '25px' }} />
          <Text style={{ fontSize: '20px', color: '#fff' }}>Add to Cart</Text>
        </Button>
      )
    } else {
      return (
        <Button type='primary' onClick={this.handle} style={{ backgroundColor: '#62d25e', borderColor: '#62d25e', padding: '10px', width: '200px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Icon type="download" style={{ fontSize: '25px' }} />
          <Text style={{ fontSize: '20px', color: '#fff' }}>Download</Text>
        </Button>
      )
    }
  }

  switchLicense = (price) => {
    if (price != 0) {
      return (
        <>
          <Col span={4} style={{ paddingBottom: '10px' }}>
            <div style={{ borderRadius: '50%', backgroundColor: '#429be8', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', height: '35px' }}>
              <Icon type="file-text" style={{ fontSize: "20px", color: '#fff' }} />
            </div>
          </Col>
          <Col span={20} style={{ paddingBottom: '10px' }}>
            <Text strong style={{ fontSize: '15px' }}>Royalty Free License <Icon type="info-circle" /></Text>
          </Col>
          <Col span={4} style={{ paddingBottom: '10px' }}>
            <div style={{ borderRadius: '50%', backgroundColor: '#4dc9e5', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', height: '35px' }}>
              <Icon type="smile" style={{ fontSize: "20px", color: '#fff' }} />
            </div>
          </Col>
          <Col span={20} style={{ paddingBottom: '10px' }}>
            <Text strong style={{ fontSize: '15px' }}>Simple Return </Text>
          </Col>
          <Col span={4} style={{ paddingBottom: '10px' }}>
            <div style={{ borderRadius: '50%', backgroundColor: '#4bdfd2', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', height: '35px' }}>
              <Icon type="tag" style={{ fontSize: "20px", color: '#fff' }} />
            </div>
          </Col>
          <Col span={20} style={{ paddingBottom: '10px' }}>
            <Text strong style={{ fontSize: '15px' }}>Best Price Guarantee</Text>
          </Col>
          <Col span={4} style={{ paddingBottom: '10px' }}>
            <div style={{ borderRadius: '50%', backgroundColor: '#ad9ae7', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', height: '35px' }}>
              <Icon type="star" style={{ fontSize: "20px", color: '#fff' }} />
            </div>
          </Col>
          <Col span={20} style={{ paddingBottom: '10px' }}>
            <Text strong style={{ fontSize: '15px' }}>Works out of the box</Text>
          </Col>
        </>
      )
    } else {
      return (
        <>
          <Col span={4} style={{ paddingBottom: '10px' }}>
            <div style={{ borderRadius: '50%', backgroundColor: '#62d25e', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', height: '35px' }}>
              <Icon type="file-text" style={{ fontSize: "20px", color: '#fff' }} />
            </div>
          </Col>
          <Col span={20} style={{ paddingBottom: '10px' }}>
            <Text strong style={{ fontSize: '15px' }}>Personal Use License <Icon type="info-circle" /></Text>
          </Col>
          <Col span={4} style={{ paddingBottom: '10px' }}>
            <div style={{ borderRadius: '50%', backgroundColor: '#ffe345', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', height: '35px' }}>
              <Icon type="frown" style={{ fontSize: "20px", color: '#fff' }} />
            </div>
          </Col>
          <Col span={20} style={{ paddingBottom: '10px' }}>
            <Text strong style={{ fontSize: '15px' }}>Only for non-commercial & non-profit uses </Text>
          </Col>
          <Col span={4} style={{ paddingBottom: '10px' }}>
            <div style={{ borderRadius: '50%', backgroundColor: '#e09741', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', height: '35px' }}>
              <Icon type="copyright" style={{ fontSize: "20px", color: '#fff' }} />
            </div>
          </Col>
          <Col span={20} style={{ paddingBottom: '10px' }}>
            <Text strong style={{ fontSize: '15px' }}>Copyright you cannot distribute them</Text>
          </Col>
          <Col span={4} style={{ paddingBottom: '10px' }}>
            <div style={{ borderRadius: '50%', backgroundColor: '#e05f41', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', height: '35px' }}>
              <Icon type="copy" style={{ fontSize: "20px", color: '#fff' }} />
            </div>
          </Col>
          <Col span={20} style={{ paddingBottom: '10px' }}>
            <Text strong style={{ fontSize: '15px' }}>You can make your own copies</Text>
          </Col>
        </>
      )
    }
  }
  render() {
    const { price, handleClick } = this.props
    return (
      <div style={{ paddingBottom: '30px' }}>
        <Card style={{ width: '100%', boxShadow: '0px 0px 8px 0px rgba(204,204,204,1)', padding: '5px 20px' }}>
          <Row >
            <Text strong style={{ fontSize: '40px' }}>{price} THB</Text>
          </Row>
          <Row style={{ padding: '10px 10px' }} type='flex' align='middle'>
            {this.switchLicense(price)}
          </Row>
          <Row style={{ padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
            {this.switchButton(price, handleClick )}
          </Row>
        </Card>
      </div>
    )
  }
}


