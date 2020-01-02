import React, { Component } from 'react'
import { Row, Col, Input, Form, Button, Select } from 'antd'
import Axios from '../config/api.service'

class AddPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      subCategoryList: [],
      selectedCategoriesId: null,
      selectedSubCategoriesId : null
    };
  }
  componentDidMount() {
    Axios.get("/categories")
      .then(result => {
        this.setState({
          categoryList: result.data
        });
      })

    Axios.get("/subcategories")
      .then(result => {
        this.setState({
          subCategoryList: result.data
        });
      })
  }

  handleCategoryChange = (value) => {
    this.setState({
      selectedCategoriesId : value
    })
  }

  handleSubCategoryChange = (value) => {
    this.setState({
      selectedSubCategoriesId : value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("/product", {
          name: value.name,
          category_id : value.categories,
          sub_category_id: value.subCategories,
          price: value.price,
          description: value.description,
          image: value.image,
          published_date: '2008-11-11'
        })
          .then(result => {
            console.log(result)
          })
          .catch(err => {
            console.error(err)
          })
        this.props.form.resetFields()
      }
    })
  }


  render() {
    const { Option } = Select;
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const formProductLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    return (
      <>
        <Row type='flex' justify="center">
          <Col span={12}>
            <div style={{ backgroundColor: '#23272c', color: '#fff', padding: '20px 30px', fontSize: '25px' }}>
              Information
              </div>
            <div style={{ backgroundColor: '#e9ebed', padding: '30px' }}>
              <Form onSubmit={this.submitForm}>
                <Row type='flex' align='middle'>
                  <Col span={10} style={{ marginRight: 20 }}>
                    <Form.Item label="Name" {...formProductLayout}>
                      {getFieldDecorator("name", {
                        rules: [
                          {
                            required: true,
                            message: "Please input product name"
                          }
                        ]
                      })(<Input placeholder="Product name" />)}
                    </Form.Item>
                  </Col>
                  <Col style={{ marginRight: 20 }}>
                    <Form.Item>
                      {getFieldDecorator('categories', {
                        rules: [
                          {
                            required: true,
                            message: 'Please select categories!'
                          }
                        ]
                      })(
                        <Select
                          placeholder="Categories"
                          onChange={this.handleCategoryChange}
                          style={{ width: 130 }}>
                          {this.state.categoryList.map(category => (
                            <Option value={category.id} key={category.id}>
                              {category.name}
                            </Option>
                          ))}
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item>
                      {getFieldDecorator('subCategories', {
                        rules: [{ required: true, message: 'Please select categories!' }],
                      })(
                        <Select
                          placeholder="Sub Categories"
                          onChange={this.handleSubCategoryChange}
                          style={{ width: 150 }}>
                          {this.state.subCategoryList.filter(filter => filter.category_id === this.state.selectedCategoriesId).map(subCat =>(
                            <Option value={subCat.id} key={subCat.id}>{subCat.name}</Option>
                          ))}
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row type='flex' align='middle'>
                  <Col span={24}>
                    <Form.Item label="Description">
                      {getFieldDecorator("description", {
                        rules: [
                          {
                            required: true,
                            message: "กรุณาใส่ Description ด้วยนะครับ"
                          }
                        ]
                      })(<TextArea rows={4} />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row type='flex' align='middle'>
                  <Col span={10} style={{ marginRight: 20 }}>
                    <Form.Item label="Price" {...formProductLayout}>
                      {getFieldDecorator("price", {
                        rules: [
                          {
                            required: true,
                            message: "Please input price"
                          }
                        ]
                      })(<Input placeholder="Price" />)}
                    </Form.Item>
                  </Col>
                  <Col span={10} style={{ marginRight: 20 }}>
                    <Form.Item label="Image" {...formProductLayout}>
                      {getFieldDecorator("image", {
                        rules: [
                          {
                            required: true,
                            message: "Please input Image URL"
                          }
                        ]
                      })(<Input placeholder="Image URL" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row type="flex" justify="center">
                  <Col md={8} sm={12} xs={24}>
                    <Form.Item>
                      <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Log in
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

export default Form.create()(AddPage);