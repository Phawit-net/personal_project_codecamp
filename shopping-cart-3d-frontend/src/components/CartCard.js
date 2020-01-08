import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, Row, Col, Icon, Button } from 'antd'
import { removecart } from '../redux/actions/actions'
let { Text } = Typography

class CartCard extends Component {

  handleDelete = (id) => {
    this.props.removecart(id)
    // console.log(this.state)
  }

  switchRender(cartsList) {
    if (cartsList.length === 0) {
      return (
        <Row style={{ width: '300px', padding: '5px 0' }}>
          <div style={{ backgroundColor: '#e3f4fc', padding: '5px 0px 5px 10px', borderRadius: '4px', borderLeft: '5px solid #bbe9ff', color: '#5396c0' }}>
            No products You haven't added any 3d models nor textures to your shopping basket.
          </div>
        </Row>
      )
    } else {
      return (
        <>
          {
            cartsList.map(cartItem => (
              <li key={cartItem.id}>
                <Row style={{ width: '300px', padding: '7px 0' }}>
                  <Col span={9}>
                    <img src={cartItem.image} alt={cartItem.name} style={{ width: '100px', height: '100px', border: '1px solid #000' }} />
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Text>{cartItem.name}</Text>
                    </Row>
                    <Row>
                      <Text>{cartItem.price}</Text>
                    </Row>
                  </Col>
                  <Col span={3}>
                    <Button type='link' onClick={() => this.handleDelete(cartItem.id)} key={cartItem.id}>
                      <Icon type="delete" theme='filled' style={{ fontSize: '25px', color: '#ff4d4f' }} />
                    </Button>
                  </Col>
                </Row>
              </li>
            ))
          }
        </>
      )
    }
  }

  render() {
    let cartsList = this.props.cartsList
    return (
      <div>
        {this.switchRender(cartsList)}
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



