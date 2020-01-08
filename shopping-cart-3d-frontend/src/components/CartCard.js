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
        <Row style={{ width: '350px', padding: '5px 0' }}>
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
                <Row type='flex' align='middle' style={{ width: '350px', padding: '7px 0px ' ,borderBottom: '1px solid #e4e4e4'}}>
                  <Col span={8}>
                    <img src={cartItem.image} alt={cartItem.name} style={{ width: '100px', height: '100px'}} />
                  </Col>
                  <Col span={13}>
                    <Row>
                      <Text strong style={{fontSize:'18px'}}>{cartItem.name.charAt(0).toUpperCase() + cartItem.name.slice(1)}</Text>
                    </Row>
                    <Row>
                      <Text style={{fontSize:'12px'}}>By {cartItem.sellerName}</Text>
                    </Row>
                    <Row style={{paddingTop:'2px'}}>
                      <Text style={{fontSize:'16px'}}>{cartItem.price} THB</Text>
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



