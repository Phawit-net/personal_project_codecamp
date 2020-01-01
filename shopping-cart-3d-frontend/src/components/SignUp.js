import React, { Component } from "react";
import { Modal, Button, Row, Input, Checkbox, Col, Form } from "antd";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    const { handleOk, handleCancel, loading, visible } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Modal
          style={{ width: "100px" }}
          visible={visible}
          title={[
            <div style ={{display:'flex' , justifyContent:'center'}}>
              <Row type = 'flex' justify = 'center' style={{width:'190px'}}>
                <Col span ={24} style={{display:'flex' ,justifyContent:'center' ,fontSize:'25px',padding:'5px'}}>
                  <b>Create a Free</b>
                </Col>
                <Col span ={24} style={{display:'flex' ,justifyContent:'center' ,fontSize:'25px',padding:'5px'}}>
                  <b>Account</b>
                </Col>
              </Row>
            </div>
          ]}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={loading}
              htmlType="submit"
              // onClick={handleOk}
              >
              Sign up
            </Button>
          ]}
        >
          <div style ={{display:'flex' , justifyContent:'center'}}>
            <Form >
              <Row style={{ width: 250 }}>
                <Col>
                  <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ],
                    })(<Input />)}
                  </Form.Item>
                </Col>
                <Col >
                  <Form.Item label="Username">
                    {getFieldDecorator("Username", {
                      rules: [
                        {
                          required: true,
                          message: "Please input Username"
                        }
                      ]
                    })(
                      <Input/>
                    )}
                  </Form.Item>
                </Col>
                <Col >
                  <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                        {
                          validator: this.validateToNextPassword,
                        },
                      ],
                    })(<Input.Password />)}
                  </Form.Item>
                </Col>
                {/* <Col span={24}>
                  <Input style={{ marginBottom: "7px" }} placeholder="" />
                </Col> */}
                <Col span={24}>
                  <Checkbox></Checkbox>&nbsp;&nbsp;
                  <span>
                    I agree with the <a href="#">terms of service.</a>
                  </span>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal>
      </>
    );
  }
}

export default Form.create()(SignUp);
