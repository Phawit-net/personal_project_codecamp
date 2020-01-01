import React, { Component } from "react";
import { Row, Input, Button, Checkbox, Col, Form, Icon } from "antd";

class LoginCard extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="login-form">
        <Row style={{ width: 250, padding: "0px 10px" }}>
          <Col>
            <Form.Item label="Username">
              {getFieldDecorator("Username", {
                rules: [
                  {
                    required: true,
                    message: "Please input Username"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Password">
              {getFieldDecorator("Password", {
                rules: [
                  {
                    required: true,
                    message: "Please input Password"
                  }
                ]
              })(
                <Input
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
