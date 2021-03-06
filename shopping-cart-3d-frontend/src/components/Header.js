import React, { Component } from 'react'
import { Row, Col, Popover, Button, Icon, Badge,Typography } from 'antd';
import LoginCard from './LoginCard';
import SignUp from './SignUp';
import ProfileCard from './ProfileCard';
import CartCard from './CartCard';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../redux/actions/actions'
import { removecart } from '../redux/actions/actions'
const {Text} = Typography;

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      visible: false,
    }
  }

  formatMoney(number) {
    return new Intl.NumberFormat().format(number)
  }

  handleLogOut = () => {
    this.props.logout()
    this.props.history.push('/')
    window.location.reload(true);
  }

  switchButtom(carts) {
    if (carts.length === 0) {
      return (<Button type="primary" disabled>Check out</Button>)
    } else {
      return (<Button type="primary">Check out</Button>)
    }
  }

  switchComponent = (user, visible, loading, carts,total) => {
    if (user.role === 'guest') {
      return (
        <Col span={12} style={{ backgroundColor: '#23272c' }}>
          <div style={{ display: 'flex', padding: 14, color: "#fff", justifyContent: 'flex-end', fontSize: 21 }}>
            <Popover placement="bottom" title={<LoginCard />}
              content={
                <a href={'#'}>
                  <span style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    Forgot Password?
                  </span>
                </a>}
              trigger="click">
              <span style={{ cursor: 'pointer' }}>Login</span>
            </Popover>
            <span style={{ cursor: 'default', paddingLeft: 15 }}> or </span>
            <span style={{ cursor: 'pointer', paddingLeft: 15 }} onClick={this.showModal}>Create Account</span>
            <SignUp
              handleOk={this.handleOk}
              handleCancel={this.handleCancel}
              loading={loading}
              visible={visible}
            />
          </div>
        </Col>
      )
    } else {
      return (
        <Col span={12} style={{ backgroundColor: '#23272c' }}>
          <div style={{ display: 'flex', padding: 14, color: "#fff", justifyContent: 'flex-end', fontSize: 17 }}>
            <Popover placement="bottom" title={<CartCard />}
              content={
                <Row type='flex' align='middle'>
                  <Col span = {16} >
                    <Text strong style={{fontSize:'18px'}}>Total Price : <Text style={{color:'#ff4d4f'}}>{this.formatMoney(total)}</Text> THB </Text>
                  </Col>
                  <Col span = {8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {this.switchButtom(carts)}
                  </Col>
                </Row>
              }
              trigger="click">
              <span style={{ marginRight: '50px', cursor: 'pointer' }}>
                <Badge count={carts.length} style={{ boxShadow: '0 0 0 0px #fff', backgroundColor: '#ff4d4f' }}>
                  <Icon type="shopping-cart" style={{ fontSize: '27px' }} />
                </Badge>
              </span>
            </Popover>
            <span style={{ marginRight: '50px', cursor: 'pointer' }}>
              <Icon type="bell" style={{ fontSize: '25px' }} />
            </span>
            <span style={{ marginRight: '50px', cursor: 'pointer' }}>
              <Icon type="mail" style={{ fontSize: '25px' }} />
            </span>
            <Popover placement="bottomRight" title={<ProfileCard />}
              content={
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type="danger" onClick={this.handleLogOut}>Log out</Button>
                </div>
              }
              trigger="click">
              <Row type='flex' align='middle'>
                <img src={this.props.user.avatar} style={{ borderRadius: '50%', backgroundColor: '#fff', width: '30px', height: '30px', cursor: 'pointer' }} />
                <span style={{ borderTop: '2px solid #fff', borderBottom: '2px solid #fff', marginLeft: '15px', cursor: 'pointer' }}>
                  {this.props.user.username}
                </span>
              </Row>
            </Popover>
          </div>
        </Col>
      )
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    }, () => {
      console.log(this.state)
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    let user = this.props.user
    let carts = this.props.carts
    let total = this.props.total
    const { visible, loading } = this.state;
    return (
      <Row >
        <Col span={12} style={{ backgroundColor: '#23272c' }}>
          <div style={{ display: 'flex', padding: 14, color: "#fff", fontSize: 20 }}>
            <a href = '/'>
              <img src='/image/logo3.png' style={{width:'90px'}}/>
            </a>
          </div>
        </Col>
        {this.switchComponent(user, visible, loading, carts,total)}
      </Row>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    carts: state.carts,
    total: state.carts.map(x=>parseInt(x.price)).reduce((sum,number)=> sum+number,0)
  }
}

const mapDispatchToProps = {
  logout: logout,
  removecart: removecart
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))