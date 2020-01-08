import React, { Component } from "react";
import { Modal, Button, Row, Input, Checkbox, Col, Form } from "antd";
import "./SignUp.css";
import Axios from '../config/api.service'

class SignUp extends Component {

  submitForm = (e) =>{
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err,value)=>{
      if(!err){
        Axios.post('/registerUser',{
          username : value.username,
          password : value.password,
          email : value.email})
        .then(result => {
          console.log(result)
        })
        .catch(err =>{
          console.error(err)
        })
        this.props.form.resetFields()
      }
    })
  }

  render() {
    const { handleOk, handleCancel, loading, visible } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
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
        footer={null}
      >
        <div style ={{display:'flex' , justifyContent:'center'}}>
          <Form onSubmit={this.submitForm}>
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
                  {getFieldDecorator("username", {
                    rules: [
                      {
                        required: true,
                        message: "Please input Username!"
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
                        message: 'Please input your Password!',
                      },
                      {
                        validator: this.validateToNextPassword,
                      },
                    ],
                  })(<Input.Password />)}
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  {getFieldDecorator('agree', {
                    valuePropName: 'unchecked',
                    initialValue: true,
                  })(<Checkbox>I agree with the <a href="#">terms of service.</a></Checkbox>)}
                </Form.Item>
              </Col>
              <Col style={{display:'flex', justifyContent:'center'}}>
                <Button
                  type="primary"
                  loading={loading}
                  htmlType="submit"
                  onClick = {handleOk}>
                  Sign up
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    );
  }
}

export default Form.create()(SignUp);
