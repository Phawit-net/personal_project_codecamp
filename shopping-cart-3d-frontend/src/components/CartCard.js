import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, Row, Col, Icon } from 'antd'
import { removecart } from '../redux/actions/actions'

class CartCard extends Component {

  handleDelete = () => {
    this.props.removecart()
    console.log(this.state)
  }

  render() {
    let cartsList = this.props.cartsList
    let handleDelete = this.props
    let { Text } = Typography
    return (
      <div>
        {
          cartsList.map(cartItem => (
            <Row style={{ width: '300px', padding: '7px 0' }}>
              <Col span={9}>
                <img src={cartItem.image} style={{ width: '100px', height: '100px', border: '1px solid #000' }} />
              </Col>
              <Col span={14}>
                <Row>
                  <Text>{cartItem.name}</Text>
                </Row>
                <Row>
                  <Text>{cartItem.price}</Text>
                </Row>
              </Col>
              <Col span={1}>
                <span style={{cursor: 'pointer'}} onClick={() => this.handleDelete()}>
                  <Icon type="delete" theme ='filled'style={{fontSize:'25px',color:'#ff4d4f'}} />
                </span>
              </Col>
            </Row>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    cartsList: state.carts,
  }
}

const mapDispatchToProps = {
  removecart: removecart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)



