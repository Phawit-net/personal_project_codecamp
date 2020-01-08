import React, { Component } from 'react'
import { Row, Col, Popover, Button, Icon, Badge } from 'antd';
import LoginCard from './LoginCard';
import SignUp from './SignUp';
import jwtDecode from 'jwt-decode'
import Axios from '../config/api.service'
import ProfileCard from './ProfileCard';
import CartCard from './CartCard';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../redux/actions/actions'
import { removecart } from '../redux/actions/actions'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      visible: false,
      isLogin: false,
      userList: []
    }
  }

  componentDidMount() {
    const isToken = localStorage.getItem("ACCESS_TOKEN")

    if (isToken) {
      const user = jwtDecode(localStorage.getItem("ACCESS_TOKEN"))
      this.setState({
        isLogin: true
      }, () => {
        Axios.get(`/users/${user.id}`)
          .then(result => {
            this.setState({
              userList: result.data
            });
          })
      })
    } else {
      this.setState({
        isLogin: false
      })
    }
  }

  handleLogOut = () => {
    this.props.logout()
    window.location.reload(true);
  }

  handleDelete = () => {
    this.props.removecart()
    console.log(this.state)
  }
  switchComponent = (visible, loading) => {
    if (this.state.isLogin) {
      return (
        <Col span={12} style={{ backgroundColor: '#23272c' }}>
          <div style={{ display: 'flex', padding: 14, color: "#fff", justifyContent: 'flex-end', fontSize: 17 }}>
            <Popover placement="bottom" title={<CartCard />}
              content={
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type="primary" onClick={() => this.handleDelete()}>Check out</Button>
                </div>
              }
              trigger="click">
              <span style={{ marginRight: '50px', cursor: 'pointer' }}>
                <Badge count={this.props.carts.length} style={{boxShadow:'0 0 0 0px #fff',backgroundColor:'#ff4d4f'}}>
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
            <img src='/image/user.png' style={{ borderRadius: '50%', backgroundColor: '#fff', width: '30px', height: '30px' }} />
            <Popover placement="bottomRight" title={<ProfileCard />}
              content={
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type="danger" onClick={this.handleLogOut}>Log out</Button>
                </div>
              }
              trigger="click">
              <span style={{ borderTop: '2px solid #fff', borderBottom: '2px solid #fff', marginLeft: '15px', cursor: 'pointer' }}>
                {this.props.user.username}
              </span>
            </Popover>
          </div>
        </Col>
      )
    } else {
      return (
        <Col span={12} style={{ backgroundColor: '#23272c' }}>
          <div style={{ display: 'flex', padding: 14, color: "#fff", justifyContent: 'flex-end', fontSize: 20 }}>
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
    const { visible, loading } = this.state;
    return (
      <Row >
        <Col span={12} style={{ backgroundColor: '#23272c' }}>
          <div style={{ display: 'flex', padding: 14, color: "#fff", fontSize: 20 }}>
            LOGO
          </div>
        </Col>
        {this.switchComponent(visible, loading)}
      </Row>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    carts:state.carts
  }
}

const mapDispatchToProps = {
  logout: logout,
  removecart: removecart
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))