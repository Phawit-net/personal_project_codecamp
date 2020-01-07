import React, { Component } from 'react'
import { Row, Col, Input, Form, Button, Select, Checkbox } from 'antd'
import Axios from '../config/api.service'
import fileformat from '../config/file.format'

const { Option } = Select;
const children = [];
for (let i of fileformat()) {
  children.push(<Option key={i}>{i}</Option>);
}

class AddPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      subCategoryList: [],
      selectedCategoriesId: null,
      selectedSubCategoriesId: null,
      texture: 0,
      material: 0,
      rigged: 0,
      animated: 0,
      uv_mapped: 0,
      unwrapped: 0
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
      selectedCategoriesId: value
    })
  }

  handleSubCategoryChange = (value) => {
    this.setState({
      selectedSubCategoriesId: value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("/product", {
          name: value.name,
          category_id: value.categories,
          sub_category_id: value.subCategories,
          price: value.price,
          description: value.description,
          image: value.image,
          published_date: '2008-11-11',
          polygons_type: value.polygons_type,
          polygons_count: value.polygons_count,
          vertices_count: value.vertices_count,
          texture: this.state.texture,
          material: this.state.material,
          rigged: this.state.rigged,
          animated: this.state.animated,
          uv_mapped: this.state.uv_mapped,
          unwrapped: this.state.unwrapped
        })
          .then(product_result => {
            Axios.post("/format", {
              file_format: value.format,
              product_id: product_result.data.id
            })
              .then(result => {
                console.log(result)
              })
              .catch(err => {
                console.error(err)
              })
          })
          .catch(err => {
            console.error(err)
          })
        this.props.form.resetFields()
      }
    })
  }

  handleCheck = (e) => {
    this.setState({
      [e.target.id]: e.target.checked
    })
  }

  render() {
    const { Option } = Select;
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    
    return (
      <>
        <Row type='flex' justify="center">
          <Col span={12}>
            <div style={{ backgroundColor: '#23272c', color: '#fff', padding: '20px 30px', fontSize: '25px' }}>
              Information
              </div>
            <div style={{ backgroundColor: '#e9ebed', padding: '30px' }}>
              <Form onSubmit={this.submitForm}>
                <Row style={{ display: 'flex'}}>
                  <Col style={{ marginRight: '20px' }} span={8}>
                    <Form.Item label='Name'>
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
                  <Col style={{ marginRight: '20px' }} span={4}>
                    <Form.Item label='Categories'>
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
                          style={{ width: 150 }}>
                          {this.state.categoryList.map(category => (
                            <Option value={category.id} key={category.id}>
                              {category.name}
                            </Option>
                          ))}
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                  <Col style={{ marginRight: '20px' }}span={8}>
                    <Form.Item label='Subcategories'>
                      {getFieldDecorator('subCategories', {
                        rules: [{ required: true, message: 'Please select categories!' }],
                      })(
                        <Select
                          placeholder="Sub Categories"
                          onChange={this.handleSubCategoryChange}
                          style={{ width: 150 }}>
                          {this.state.subCategoryList.filter(filter => filter.category_id === this.state.selectedCategoriesId).map(subCat => (
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
                    <Form.Item label="Price" >
                      {getFieldDecorator("price", {
                        rules: [
                          {
                            required: true,
                            message: "Please input price"
                          }
                        ]
                      })(<Input placeholder="Price (THB)" />)}
                    </Form.Item>
                  </Col>
                  <Col span={10} style={{ marginRight: 20 }}>
                    <Form.Item label="Image" >
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
                <Row type="flex">
                  <Col span={6} style={{ marginRight: 20 }}>
                    <Form.Item label="File Format" >
                      {getFieldDecorator("format", {
                        rules: [
                          {
                            required: true,
                            message: "Please select format"
                          }
                        ]
                      })(<Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                      >
                        {children}
                      </Select>)}
                    </Form.Item>
                  </Col>
                  <Col span={4} style={{ marginRight: 20 }}>
                    <Form.Item label="Type" >
                      {getFieldDecorator('polygons_type', {
                        rules: [
                          {
                            required: true,
                            message: 'Please select type'
                          }
                        ]
                      })(
                        <Select
                          placeholder="Geometry"
                          style={{ width: 150 }}>
                          <Option value='Nurbs' key='1'>
                            {'Nurbs'}
                          </Option>
                          <Option value='Polygon Mesh' key='2'>
                            {'Polygon Mesh'}
                          </Option>
                          <Option value='Subdivision' key='3'>
                            {'Subdivision'}
                          </Option>
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                  <Col span={4} style={{ marginRight: 20 }}>
                    <Form.Item label="Polygons">
                      {getFieldDecorator("polygons_count", {
                        rules: [
                          {
                            required: true,
                            message: "Please input polygons"
                          }
                        ]
                      })(<Input
                        type="text"
                      />)}
                    </Form.Item>
                  </Col>
                  <Col span={4} style={{ marginRight: 20 }}>
                    <Form.Item label="Vertices" >
                      {getFieldDecorator("vertices_count", {
                        rules: [
                          {
                            required: true,
                            message: "Please input vertices"
                          }
                        ]
                      })(<Input
                        type="text"
                      />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row type="flex" justify="center">
                  <Col md={4} sm={12} xs={24}>
                    <Form.Item>
                      {getFieldDecorator("texture", {
                        valuePropName: "checked",
                        initialValue: false
                      })(
                        <Checkbox onChange={this.handleCheck}>Textures</Checkbox>
                      )}
                    </Form.Item>
                  </Col>
                  <Col md={4} sm={12} xs={24}>
                    <Form.Item>
                      {getFieldDecorator("material", {
                        valuePropName: "checked",
                        initialValue: false
                      })(
                        <Checkbox onChange={this.handleCheck} >Material</Checkbox>
                      )}
                    </Form.Item>
                  </Col>
                  <Col md={4} sm={12} xs={24}>
                    <Form.Item>
                      {getFieldDecorator("rigged", {
                        valuePropName: "checked",
                        initialValue: false
                      })(
                        <Checkbox onChange={this.handleCheck} >Rigged</Checkbox>
                      )}
                    </Form.Item>
                  </Col>
                  <Col md={4} sm={12} xs={24}>
                    <Form.Item>
                      {getFieldDecorator("animated", {
                        valuePropName: "checked",
                        initialValue: false
                      })(
                        <Checkbox onChange={this.handleCheck} >Animated</Checkbox>
                      )}
                    </Form.Item>
                  </Col>
                  <Col md={4} sm={12} xs={24}>
                    <Form.Item>
                      {getFieldDecorator("uv_mapped", {
                        valuePropName: "checked",
                        initialValue: false
                      })(
                        <Checkbox onChange={this.handleCheck} >UV mapped</Checkbox>
                      )}
                    </Form.Item>
                  </Col>
                  <Col md={4} sm={12} xs={24}>
                    <Form.Item>
                      {getFieldDecorator("unwrapped", {
                        valuePropName: "checked",
                        initialValue: false
                      })(
                        <Checkbox onChange={this.handleCheck} >Unwrapped UVs</Checkbox>
                      )}
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
                        className="login-form-button">
                        Add Model
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