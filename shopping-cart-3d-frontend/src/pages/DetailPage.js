import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon } from 'antd'
import Axios from '../config/api.service'

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      categoryPath:[],
      subCategoryPath:[],
    };
  }
 
  async componentDidMount(){
    const location = this.props.location.pathname.split("/")[2]
    const result1 = await Axios.get(`/details/${location}`)
    this.setState({productList: result1.data})
    const result2 = await Axios.get(`/catPath/${this.state.productList.category_id}`)
    this.setState({ categoryPath: result2.data})
    const result3 = await Axios.get(`/subPath/${this.state.productList.sub_category_id}`)
    this.setState({ subCategoryPath: result3.data})
  }

  handle =()=>{
    console.log(this.state)
  }

  render() {
    return (
      <>
        <Row>
          <span>{this.state.categoryPath.name} > {this.state.subCategoryPath.name} > {this.state.productList.name}</span>
        </Row>
        <Row style={{ margin: '70px 130px 0px 130px' }} type='flex'>
          <Col span={18} style={{ padding: '0px 20px' }}>
            <div style={{ backgroundColor: 'red', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
              <img src={this.state.productList.image} style={{ width: '700px', height: '700px' }} />
            </div>
          </Col>
          <Col span={6} style={{ padding: '0px 20px' }}>
            {/* <div style={{display:'flex',justifyContent:'center',alignItems:"center"}}> */}
            <Card style={{ width: '100%', boxShadow: '0px 0px 8px 0px rgba(184,184,184,1)', }}>
              <p>$ 120.00</p>
              <p>Royalty Free License</p>
              <Button type='danger' onClick={this.handle}>
                <Icon type="shopping-cart" style={{ fontSize: '20px' }} />
                Add to Cart
              </Button>
            </Card>
            {/* </div> */}
          </Col>
          <Col span={24} style={{ backgroundColor: 'blue' }}>
            asdasdas
          </Col>
        </Row>
      </>
    )
  }
}
