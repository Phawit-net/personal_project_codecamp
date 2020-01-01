import React, { Component } from 'react'
import { Row, Col, Popover, Button, Modal } from 'antd';
import LoginCard from './LoginCard';
import SignUp from './SignUp';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      visible: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    },()=>{
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
        <Col span={12} style={{ backgroundColor: '#23272c'}}>
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
              // showModal = {this.showModal}
              handleOk = {this.handleOk}
              handleCancel = {this.handleCancel}
              loading = {loading}
              visible = {visible}
            />
          </div>
        </Col>
      </Row>
    )
  }
}
