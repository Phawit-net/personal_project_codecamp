import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Axios from '../config/api.service'
import PriceCard from '../components/detail/PriceCard';
import UserCard from '../components/detail/UserCard';
import ImageCard from '../components/detail/ImageCard';
import FullPath from '../components/detail/FullPath';
import DetailCard from '../components/detail/DetailCard';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      categoryPath: [],
      subCategoryPath: [],
      format: [],
      user: []
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
    const result4 = await Axios.get(`/formats`)
    this.setState({ format: result4.data })
    const result5 = await Axios.get(`/users/${this.state.productList.user_id}`)
    this.setState({ user: result5.data })
  }

  handleClick = () => {
    console.log(this.state)
  }

  render() {
    return (
      <>
        <Row style={{ margin: '17px 150px 17px 150px' }} type='flex'>
          <FullPath
            catPath={this.state.categoryPath.name}
            subPath={this.state.subCategoryPath.name}
            productName={this.state.productList.name} />
        </Row>
        <Row style={{ margin: '0px 130px 0px 130px' }} type='flex'>
          <Col span={16} style={{ padding: '0px 20px' }}>
            <ImageCard
              image={this.state.productList.image} />
          </Col>
          <Col span={8} style={{ padding: '0px 20px' }}>
            <PriceCard
              price={this.state.productList.price}
              handleClick={this.handleClick} />
            <UserCard
              username={this.state.user.username} />
          </Col>
          <Col span={24} style={{ padding: '30px 20px' }}>
            <DetailCard
              description={this.state.productList.description}
              file_formats={this.state.format}
              published_date={this.state.productList.published_date}
              polygons_type={this.state.productList.polygons_type}
              polygons_count={this.state.productList.polygons_count}
              vertices_count={this.state.productList.vertices_count}
              texture={this.state.productList.texture}
              material={this.state.productList.material}
              rigged={this.state.productList.rigged}
              animated={this.state.productList.animated}
              uv_mapped={this.state.productList.uv_mapped}
              unwrapped={this.state.productList.unwrapped}/>
          </Col>
        </Row>
      </>
    )
  }
}
