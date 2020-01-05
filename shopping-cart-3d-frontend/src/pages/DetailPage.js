import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon, Typography } from 'antd'
import Axios from '../config/api.service'
import PriceCard from '../components/detail/PriceCard';
import UserCard from '../components/detail/UserCard';
import ImageCard from '../components/detail/ImageCard';
import FullPath from '../components/detail/FullPath';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      categoryPath: [],
      subCategoryPath: [],
    };
  }

  async componentDidMount() {
    const location = this.props.location.pathname.split("/")[2]
    const result1 = await Axios.get(`/details/${location}`)
    this.setState({ productList: result1.data })
    const result2 = await Axios.get(`/catPath/${this.state.productList.category_id}`)
    this.setState({ categoryPath: result2.data })
    const result3 = await Axios.get(`/subPath/${this.state.productList.sub_category_id}`)
    this.setState({ subCategoryPath: result3.data })
  }

  handle = () => {
    console.log(this.state)
  }

  render() {
    const { Text } = Typography;
    return (
      <>
        <Row style={{ margin: '17px 150px 17px 150px' }} type='flex'>
          <FullPath
            catPath={this.state.categoryPath.name}
            subPath={this.state.subCategoryPath.name}
            productName={this.state.productList.name} />
        </Row>
        <Row style={{ margin: '0px 130px 0px 130px' }} type='flex'>
          <Col span={18} style={{ padding: '0px 20px' }}>
            <ImageCard
              image={this.state.productList.image} />
          </Col>
          <Col span={6} style={{ padding: '0px 20px' }}>
            <PriceCard
              price={this.state.productList.price} />
            <UserCard />
          </Col>
          <Col span={24} style={{ backgroundColor: 'blue', padding: '0px 20px' }}>
            asdasdas
          </Col>
        </Row>
      </>
    )
  }
}
