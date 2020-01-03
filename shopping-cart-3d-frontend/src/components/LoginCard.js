import React, { Component } from "react";
import { Row, Input, Button, Checkbox, Col, Form, Icon } from "antd";
import Axios from '../config/api.service'
import { Redirect } from 'react-router'
import jwtDecode from 'jwt-decode'

class LoginCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : '',
    }
  }

   handleSubmit = (e)=>{
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Axios.post('/loginUser', {
          username: values.username,
          password: values.password
        })
        .then(result => {
          console.log(result.data)
          localStorage.setItem('ACCESS_TOKEN', result.data.token)
          // this.props.history.push('/')
          window.location.reload(true);
        })
        .catch(err => {
          console.error(err);
          this.props.form.resetFields()
        })
      }
    })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Row style={{ width: 250, padding: "0px 10px" }}>
          <Col>
            <Form.Item label="Username">
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "Please input Username"
                  }
                ]
              })(
                <Input
                  // onChange = {(e)=> this.setState({username : e.target.value})}
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Password">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input Password"
                  }
                ]
              })(
                <Input
                  // onChange = {(e)=> this.setState({password : e.target.value})}
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={14}>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember Me</Checkbox>)}
            </Form.Item>
          </Col>
          <Col span={10}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Log in
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(LoginCard);
