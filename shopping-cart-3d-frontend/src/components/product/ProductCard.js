import React, { Component } from 'react'
import './ProductCard.css';
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

export default class ProductCard extends Component {
  render() {
    const { productList,fullPath } = this.props
    return (
      <Row>
        {productList.map(product => (
          <Col span={6} key ={product.id}>
            {/* <a href= {`${fullPath}/Detail/${product.name}`}> */}
            <a href= {`/Detail/${product.name}`}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={product.image}/>}>
                <Meta title={product.name} />
                price : {product.price}
                www.instagram.com
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    )
  }
}
