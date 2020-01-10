import React, { Component } from 'react'
import { Card, Row, Col, Typography, Rate, Icon, Divider } from 'antd'
const { Text } = Typography

export default class UserCard extends Component {
  render() {
    const { username ,avatar} = this.props

    return (
      <div style={{ paddingBottom: '30px' }}>
        <Card style={{ width: '100%', height: '220px', boxShadow: '0px 0px 8px 0px rgba(204,204,204,1)', padding: '5px 20px' }}>
          <Row type='flex' align='middle'>
            <Col span={7}>
              <img src={avatar} alt='user' style={{ borderRadius: '50%', backgroundColor: '#cecece', width: '70px', height: '70px' }} />
            </Col>
            <Col span={12}>
              <Row>
                Submitted by
              </Row>
              <Row>
                <Text strong style={{ fontSize: '18px' }}>{username}</Text>
              </Row>
              <Row>
                <Rate disabled defaultValue={2} />
              </Row>
            </Col>
            <Col>
              <div style={{border:'1px solid #cbcbcb' , padding :'15px', borderRadius:'3px'}}>
                <Icon type="mail" style={{ fontSize: '25px' }} />
              </div>
            </Col>
          </Row>
          <Divider></Divider>
          <Row type='flex' align='middle'>
            <Text strong style={{fontSize:'18px'}}>Currently Sells : </Text>
          </Row>
        </Card>
      </div>
    )
  }
}
