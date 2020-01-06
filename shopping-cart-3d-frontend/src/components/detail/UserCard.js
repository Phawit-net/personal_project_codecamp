import React, { Component } from 'react'
import { Card, Row, Button, Icon, Typography } from 'antd'
const { Text } = Typography;

export default class UserCard extends Component {
  render() {
    const {username} =this.props

    return (
      <div style={{ paddingBottom: '30px' }}>
        <Card style={{ width: '100%', boxShadow: '0px 0px 8px 0px rgba(204,204,204,1)', padding: '5px 20px' }}>
          <Row >
            <img src = '/image/user.png' style={{borderRadius:'50%',backgroundColor:'#cecece',width:'70px',height:'70px'}}/>  
          </Row>
          {username}
        </Card>
      </div>
    )
  }
}
